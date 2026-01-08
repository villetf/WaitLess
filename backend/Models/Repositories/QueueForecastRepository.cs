using backend.Models.DTOs;
using backend.Models.Entities;
using backend.Models.Interfaces;

namespace backend.Models.Repositories;

public class QueueForecastRepository : IQueueForecastRepository
{
   private readonly IParkRepository _parkRepository;

   public QueueForecastRepository(IParkRepository parkRepository)
   {
      _parkRepository = parkRepository;
   }

   public Task<QueueForecast> GenerateQueueForecastAsync(string park, IEnumerable<Attraction> attractions, DateTime startDate, DateTime endDate)
   {
      var context = _parkRepository.GetParkContext(park);
      var startDateLastYear = GetDateOneYearAgo(startDate);
      var endDateLastYear = GetDateOneYearAgo(endDate);
      var dayList = GetDayRange(startDateLastYear, endDateLastYear);

      var allMetrics = new List<AverageDay>();

      foreach (var day in dayList)
      {
         var averageList = new List<double?>();
         foreach (var attraction in attractions)
         {
            var metrics = context.AttractionMetrics
               .Where(m =>
                  m.AId == attraction.AId && 
                  m.Time >= day.Date && 
                  m.Time < day.AddDays(1) &&
                  m.QueueTime != 0
               )
               .Select(m => m.QueueTime)
               .ToList();

            var average = metrics
               .DefaultIfEmpty(0)
               .Average();
            
            if (average != 0)
            {
               averageList.Add(average);
            }
         }

         if (averageList.Count > 0)
         {
            var dayAverage = new AverageDay {
               Date = GetDateOneYearLater(day),
               Average = averageList.Average()
            };

            allMetrics.Add(dayAverage);
         }
      }

      return Task.FromResult(new QueueForecast
      {
         Days = allMetrics
            .OrderBy(m => m.Average)
            .ToList()
      });
   }

   public Task<int> GetMetricsToSearchAsync(ForecastRequestDTO forecastRequest)
   {
      var context = _parkRepository.GetParkContext(forecastRequest.Park);
      var startDateLastYear = GetDateOneYearAgo(forecastRequest.StartDate);
      var endDateLastYear = GetDateOneYearAgo(forecastRequest.EndDate);

      var metricsCount = context.AttractionMetrics
            .Where(m =>
               forecastRequest.AttractionIds.Contains(m.AId) &&
               m.Time >= startDateLastYear && 
               m.Time < endDateLastYear &&
               m.QueueTime != 0
            )
            .Count();

      return Task.FromResult(metricsCount);
   }

   private static DateTime GetDateOneYearAgo(DateTime inputDate)
   {
      var oneYearAgo = inputDate.AddYears(-1);

      int daysDiff = ((int)inputDate.DayOfWeek - (int)oneYearAgo.DayOfWeek + 7) % 7;
      DateTime candidate = oneYearAgo.AddDays(daysDiff);

      if ((candidate - oneYearAgo).Days > 3)
      {
         candidate = oneYearAgo.AddDays(daysDiff - 7);
      }

      return candidate;
   }

   private static DateTime GetDateOneYearLater(DateTime inputDate)
   {
      var oneYearLater = inputDate.AddYears(1);

      int daysDiff = ((int)inputDate.DayOfWeek - (int)oneYearLater.DayOfWeek + 7) % 7;
      DateTime candidate = oneYearLater.AddDays(daysDiff);

      if ((candidate - oneYearLater).Days > 3)
      {
         candidate = oneYearLater.AddDays(daysDiff - 7);
      }

      return candidate;
   }

   public static List<DateTime> GetDayRange(DateTime startDate, DateTime endDate)
   {
      var dates = new List<DateTime>();

      for (var date = startDate.Date; date <= endDate.Date; date = date.AddDays(1))
      {
         dates.Add(date);
      }

      return dates;
   }
}

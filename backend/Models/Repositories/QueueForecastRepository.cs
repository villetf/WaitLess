using System;
using backend.Models.Entities;
using backend.Models.Interfaces;

namespace backend.Models.Repositories;

public class QueueForecastRepository : IQueueForecastRepository
{
   public Task<QueueForecast> GenerateQueueForecastAsync(int parkId, IEnumerable<Attraction> attractionId, DateTime date)
   {
      throw new NotImplementedException();
   }
}

using backend.Models;
using backend.Models.DTOs;
using backend.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
   [Route("api/v1/[controller]")]
   [ApiController]
   public class QueueForecastController : ControllerBase
   {
      private readonly IQueueForecastRepository _queueForecastRepository;
      private readonly IAttractionRepository _attractionRepository;

      public QueueForecastController(IQueueForecastRepository queueForecastRepository, IAttractionRepository attractionRepository)
      {
         _attractionRepository = attractionRepository;
         _queueForecastRepository = queueForecastRepository;
      }

      [HttpPost]
      public async Task<IActionResult> GetQueueForecast([FromBody] ForecastRequestDTO forecastRequest)
      {
         var attractionsList = new List<Attraction>();
         foreach (var id in forecastRequest.AttractionIds)
         {
            Attraction? attraction = await _attractionRepository.GetAttractionByIdAsync(id, forecastRequest.Park);
            if (attraction == null)
            {
               return NotFound($"Attraction with ID {id} not found in park {forecastRequest.Park}.");
            }

            attractionsList.Add(attraction);
         }

         var forecast = await _queueForecastRepository.GenerateQueueForecastAsync(forecastRequest.Park, attractionsList, forecastRequest.StartDate, forecastRequest.EndDate);

         return Ok(forecast);
      }

      [HttpPost("metricsToSearch")]
      public async Task<IActionResult> GetMetricsToSearch([FromBody] ForecastRequestDTO forecastRequest)
      {
         var metrics = await _queueForecastRepository.GetMetricsToSearchAsync(forecastRequest);
         return Ok(metrics);
      }
   }
}

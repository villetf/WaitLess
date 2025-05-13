using System;
using backend.Models.DTOs;
using backend.Models.Entities;

namespace backend.Models.Interfaces;

public interface IQueueForecastRepository
{
   Task<QueueForecast> GenerateQueueForecastAsync(string park, IEnumerable<Attraction> attractions, DateTime startDate, DateTime endDate);
   Task<int> GetMetricsToSearchAsync(ForecastRequestDTO forecastRequest);
}

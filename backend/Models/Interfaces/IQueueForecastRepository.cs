using System;
using backend.Models.Entities;

namespace backend.Models.Interfaces;

public interface IQueueForecastRepository
{
   Task<QueueForecast> GenerateQueueForecastAsync(int parkId, IEnumerable<Attraction> attractionId, DateTime date);
}

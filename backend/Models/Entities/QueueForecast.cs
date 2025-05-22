using System;

namespace backend.Models.Entities;

public class QueueForecast
{
   public required List<AverageDay> Days { get; set; }
}

using System;

namespace backend.Models.DTOs;

public class ForecastRequestDTO
{
   public required string Park { get; set; }
   public required List<int> AttractionIds { get; set; }
   public required DateTime StartDate { get; set; }
   public required DateTime EndDate { get; set; }
}

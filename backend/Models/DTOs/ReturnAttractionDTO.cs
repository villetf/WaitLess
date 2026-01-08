namespace backend.Models.DTOs;

public class ReturnAttractionDTO
{
   public int Id { get; set; }
   public required string Name { get; set; }
   public int? BuildYear { get; set; }
   public string? Manufacturer { get; set; }
   public bool ChildAttraction { get; set; }
   public int? Height { get; set; }
   public int? RailLength { get; set; }
   public int? RideTime { get; set; }
   public int? MaxSpeed { get; set; }
   public string? Status { get; set; }
   public double? Latitude { get; set; }
   public double? Longitude { get; set; }
}

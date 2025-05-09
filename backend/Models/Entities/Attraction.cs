using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Attraction
{
   public int AId { get; set; }

   public string Name { get; set; } = null!;

   public int? BuildYear { get; set; }

   public string? Manufacturer { get; set; }

   public int? Height { get; set; }

   public int? RailLength { get; set; }

   public int? RideTime { get; set; }

   public int? MaxSpeed { get; set; }

   public bool? ChildAttraction { get; set; }

   public string? Status { get; set; }

   public double? Latitude { get; set; }

   public double? Longitude { get; set; }
   
   public bool? InUse { get; set; }

   public virtual ICollection<AttractionMetric> AttractionMetrics { get; set; } = new List<AttractionMetric>();
}

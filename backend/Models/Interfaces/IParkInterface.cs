using Microsoft.EntityFrameworkCore;

namespace backend.Models.Interfaces;

public interface IParkInterface
{
   DbSet<Attraction> Attractions { get; set; }
   DbSet<AttractionMetric> AttractionMetrics { get; set; }
}

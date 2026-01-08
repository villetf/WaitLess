namespace backend.Models;

public partial class AttractionMetric
{
   public int AId { get; set; }

   public int QueueTime { get; set; }

   public DateTime Time { get; set; }

   public virtual Attraction AIdNavigation { get; set; } = null!;
}

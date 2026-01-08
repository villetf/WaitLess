namespace backend.Models.Entities;

public class Park
{
   public required string Id { get; set; }
   public required string Name { get; set; }
   public string? City { get; set; }
   public string? Country { get; set; }
   public string? LogoUrl { get; set; }
}

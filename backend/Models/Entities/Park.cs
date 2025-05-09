using System;

namespace backend.Models.Entities;

public class Park
{
   public int Id { get; set; }
   public string Name { get; set; } = string.Empty;
   public string Location { get; set; } = string.Empty;
   public string LogoUrl { get; set; } = string.Empty;
}

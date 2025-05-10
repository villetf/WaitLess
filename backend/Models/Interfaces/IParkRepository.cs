using System;
using backend.Models.Entities;

namespace backend.Models.Interfaces;

public interface IParkRepository
{
   IParkInterface GetParkContextAsync(string park);
   Task<IEnumerable<Park>> GetAllParksAsync();
   Task<Park?> GetParkByIdAsync(int id);
   Task<Park?> GetParkByNameAsync(string name);
}

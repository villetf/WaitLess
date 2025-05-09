using System;
using backend.Models.Entities;
using backend.Models.Interfaces;

namespace backend.Models.Repositories;

public class ParkRepository : IParkRepository
{
   public Task<IEnumerable<Park>> GetAllParksAsync()
   {
      throw new NotImplementedException();
   }

   public Task<Park?> GetParkByIdAsync(int id)
   {
      throw new NotImplementedException();
   }

   public Task<Park?> GetParkByNameAsync(string name)
   {
      throw new NotImplementedException();
   }
}

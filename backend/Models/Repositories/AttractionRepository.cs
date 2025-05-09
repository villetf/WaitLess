using System;
using backend.Models.Interfaces;

namespace backend.Models.Repositories;

public class AttractionRepository : IAttractionRepository
{
   public Task<IEnumerable<Attraction>> GetAllAttractionsAsync()
   {
      throw new NotImplementedException();
   }

   public Task<Attraction?> GetAttractionByIdAsync(int id, string park)
   {
      throw new NotImplementedException();
   }
}

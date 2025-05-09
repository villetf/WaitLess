using System;

namespace backend.Models.Interfaces;

public interface IAttractionRepository
{
   Task<IEnumerable<Attraction>> GetAllAttractionsAsync();
   Task<Attraction?> GetAttractionByIdAsync(int id, string park);
}

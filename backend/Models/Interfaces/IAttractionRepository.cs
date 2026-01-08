namespace backend.Models.Interfaces;

public interface IAttractionRepository
{
   Task<IEnumerable<Attraction>> GetAllAttractionsAsync(string park, bool includeDiscontinued = false);
   Task<Attraction?> GetAttractionByIdAsync(int id, string park);
}

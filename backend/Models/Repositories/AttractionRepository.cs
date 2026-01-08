using backend.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Models.Repositories;

public class AttractionRepository : IAttractionRepository
{
   private readonly LisebergContext _lisebergContext;
   private readonly GronalundContext _gronalundContext;
   private readonly IParkRepository _parkRepository;

   public AttractionRepository(LisebergContext lisebergContext, GronalundContext gronalundContext, IParkRepository parkRepository)
   {
      _lisebergContext = lisebergContext;
      _gronalundContext = gronalundContext;
      _parkRepository = parkRepository;
   }
   
   public async Task<IEnumerable<Attraction>> GetAllAttractionsAsync(string park, bool includeDiscontinued)
   {
      IParkInterface currentContext = _parkRepository.GetParkContext(park); 

      if (includeDiscontinued == true)
      {
         return await currentContext.Attractions.ToListAsync();
      } else
      {
         return await currentContext.Attractions.Where(a => a.InUse == true).ToListAsync();
      }
   }

   public Task<Attraction?> GetAttractionByIdAsync(int id, string park)
   {
      IParkInterface currentContext = _parkRepository.GetParkContext(park);

      return currentContext.Attractions.FirstOrDefaultAsync(a => a.AId == id);
   }
}

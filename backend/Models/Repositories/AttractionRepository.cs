using System;
using backend.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Models.Repositories;

public class AttractionRepository : IAttractionRepository
{
   private readonly LisebergContext _lisebergContext;
   private readonly GronalundContext _gronalundContext;

   public AttractionRepository(LisebergContext lisebergContext, GronalundContext gronalundContext)
   {
      _lisebergContext = lisebergContext;
      _gronalundContext = gronalundContext;
   }
   
   public async Task<IEnumerable<Attraction>> GetAllAttractionsAsync(string park, bool includeDiscontinued)
   {
      IParkInterface currentContext;
      switch (park)
      {
         case "liseberg":
            currentContext = _lisebergContext;
            break;
         case "gronalund":
            currentContext = _gronalundContext;
            break;
         default:
            throw new ArgumentException("Ogiltigt parknamn");
      }

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
      throw new NotImplementedException();
   }
}

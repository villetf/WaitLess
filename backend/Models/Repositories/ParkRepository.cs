using System;
using backend.Models.Entities;
using backend.Models.Interfaces;

namespace backend.Models.Repositories;

public class ParkRepository : IParkRepository
{
   private readonly LisebergContext _lisebergContext;
   private readonly GronalundContext _gronalundContext;

   public ParkRepository(LisebergContext lisebergContext, GronalundContext gronalundContext)
   {
      _lisebergContext = lisebergContext;
      _gronalundContext = gronalundContext;
   }

   public IParkInterface GetParkContextAsync(string park)
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
      return currentContext;
   }
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

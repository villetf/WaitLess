using System;
using System.Text.Json;
using backend.Models.Entities;
using backend.Models.Interfaces;
using Microsoft.AspNetCore.Hosting;

namespace backend.Models.Repositories;

public class ParkRepository : IParkRepository
{
   private readonly LisebergContext _lisebergContext;
   private readonly GronalundContext _gronalundContext;
   private readonly List<Park> _parks;

   public ParkRepository(LisebergContext lisebergContext, GronalundContext gronalundContext, IWebHostEnvironment env)
   {
      _lisebergContext = lisebergContext;
      _gronalundContext = gronalundContext;

      var filePath = Path.Combine(env.ContentRootPath, "Data", "parks.json");
      var json = File.ReadAllText(filePath);
      _parks = JsonSerializer.Deserialize<List<Park>>(json) ?? new List<Park>();
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
      return Task.FromResult(_parks.AsEnumerable());
   }

   public Task<Park> GetParkByIdAsync(string id)
   {
      return Task.FromResult(_parks.First(p => p.Id == id));
   }
}

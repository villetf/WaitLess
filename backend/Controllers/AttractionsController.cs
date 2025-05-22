using backend.Models.DTOs;
using backend.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
   [Route("api/v1/[controller]")]
   [ApiController]
   public class AttractionsController : ControllerBase
   {
      private readonly IAttractionRepository _attractionRepository;

      public AttractionsController(IAttractionRepository attractionRepository)
      {
         _attractionRepository = attractionRepository;
      }

      [HttpGet]
      public async Task<IActionResult> GetAllAttractions(string park, bool includeDiscontinued = false)
      {
         var attractions = await _attractionRepository.GetAllAttractionsAsync(park, includeDiscontinued);
         var returnList = new List<ReturnAttractionDTO>();

         foreach (var attraction in attractions)
         {
            var attractionDTO = new ReturnAttractionDTO
            {
               Id = attraction.AId,
               Name = attraction.Name,
               BuildYear = attraction.BuildYear,
               Manufacturer = attraction.Manufacturer,
               ChildAttraction = attraction.ChildAttraction,
               Status = attraction.Status,
               Height = attraction.Height,
               RailLength = attraction.RailLength,
               RideTime = attraction.RideTime,
               MaxSpeed = attraction.MaxSpeed,
               Latitude = attraction.Latitude,
               Longitude = attraction.Longitude
            };
            returnList.Add(attractionDTO);
         }

         return Ok(returnList);
      }

      [HttpGet("{id}")]
      public async Task<IActionResult> GetAttractionById(int id, string park)
      {
         var attraction = await _attractionRepository.GetAttractionByIdAsync(id, park);
         if (attraction == null)
         {
            return NotFound();
         }

         var attractionDTO = new ReturnAttractionDTO
         {
            Id = attraction.AId,
            Name = attraction.Name,
            BuildYear = attraction.BuildYear,
            Manufacturer = attraction.Manufacturer,
            ChildAttraction = attraction.ChildAttraction,
            Status = attraction.Status,
            Height = attraction.Height,
            RailLength = attraction.RailLength,
            RideTime = attraction.RideTime,
            MaxSpeed = attraction.MaxSpeed,
            Latitude = attraction.Latitude,
            Longitude = attraction.Longitude
         };

         return Ok(attractionDTO);
      }
   }
}

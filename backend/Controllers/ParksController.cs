using backend.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
   [Route("api/v1/[controller]")]
   [ApiController]
   public class ParksController : ControllerBase
   {
      private readonly IParkRepository _parkRepository;

      public ParksController(IParkRepository parkRepository)
      {
         _parkRepository = parkRepository;
      }

      [HttpGet]
      public async Task<IActionResult> GetAllParks()
      {
         var parks = await _parkRepository.GetAllParksAsync();

         return Ok(parks);
      }

      [HttpGet("{park}")]
      public async Task<IActionResult> GetPark(string park)
      {
         var parkInfo = await _parkRepository.GetParkByIdAsync(park);
         if (parkInfo == null)
         {
            return NotFound();
         }

         return Ok(parkInfo);
      }
   }
}

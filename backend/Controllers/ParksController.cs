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
   }
}

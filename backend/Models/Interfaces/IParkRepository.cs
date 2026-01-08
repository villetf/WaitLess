using backend.Models.Entities;

namespace backend.Models.Interfaces;

public interface IParkRepository
{
   IParkInterface GetParkContext(string park);
   Task<IEnumerable<Park>> GetAllParksAsync();
   Task<Park> GetParkByIdAsync(string id);
}

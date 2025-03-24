using Microsoft.AspNetCore.Mvc;
using MyFullstackApp.Api.Data;
using System.Linq;

namespace MyFullstackApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PersonaController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetPersonas()
        {
            var personas = _context.Personas.ToList();
            return Ok(personas);
        }
    }
}

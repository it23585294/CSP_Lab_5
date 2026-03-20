using Microsoft.AspNetCore.Mvc;

namespace DotNetBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "Hello from Azure API!", timestamp = DateTime.UtcNow });
        }
        
        [HttpGet("hello/{name}")]
        public IActionResult GetHello(string name)
        {
            return Ok(new { message = $"Hello {name}!", timestamp = DateTime.UtcNow });
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using MyFullstackApp.Api.Data;
using MyFullstackApp.Api.Services;
using System.Linq;

namespace MyFullstackApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConversationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly CurrentUserService _currentUserService;

        public ConversationController(ApplicationDbContext context, CurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }

        [HttpGet("{conversationId}")]
        public IActionResult GetConversation(int conversationId)
        {
            var chats = _context.Chats.Where(c => c.ConversationId == conversationId).ToList();
            return Ok(chats);
        }

        [HttpGet]
        public IActionResult GetConversations()
        {
            var userId = _currentUserService.GetCurrentUserId();
            var conversations = _context.Conversations.ToList();
            return Ok(conversations);
        }
    }
}

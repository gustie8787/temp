using Microsoft.AspNetCore.Mvc;
using MyFullstackApp.Api.Data;
using MyFullstackApp.Api.Models;
using MyFullstackApp.Api.Services;
using System.Linq;

namespace MyFullstackApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly CurrentUserService _currentUserService;

        public ChatController(ApplicationDbContext context, CurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }

        [HttpGet("{conversationId}")]
        public IActionResult GetChat(int conversationId)
        {
            var chats = _context.Chats
                .Where(c => c.ConversationId == conversationId)
                .OrderBy(c => c.Id)
                .ToList();

            return Ok(chats);
        }

        [HttpPost]
        public IActionResult PostChat([FromBody] ChatRequest request)
        {
            var userId = _currentUserService.GetCurrentUserId();
            var chat = new Chat
            {
                UserId = userId,
                Message = request.Message,
                IsResponse = false,
                ConversationId = request.ConversationId
            };

            _context.Chats.Add(chat);
            _context.SaveChanges();

            if (request.ConversationId == null || request.ConversationId == 0)
            {
                var conversationName = request.Message.Length > 255 ? request.Message.Substring(0, 255) : request.Message;
                var conversation = new Conversation { Name = conversationName, PersonaId = request.PersonaId };
                _context.Conversations.Add(conversation);
                _context.SaveChanges();
                chat.ConversationId = conversation.Id;
                _context.SaveChanges();
            }

            var responseMessage = $"{request.Message} response";
            var responseChat = new Chat
            {
                UserId = userId,
                Message = responseMessage,
                IsResponse = true,
                ConversationId = chat.ConversationId
            };

            _context.Chats.Add(responseChat);
            _context.SaveChanges();

            return Ok(new { response = responseMessage, conversationId = chat.ConversationId });
        }
    }

    public class ChatRequest
    {
        public string Message { get; set; }
        public int? ConversationId { get; set; }
        public int PersonaId { get; set; }
    }
}

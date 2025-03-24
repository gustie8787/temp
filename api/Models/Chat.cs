namespace MyFullstackApp.Api.Models
{
    public class Chat
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Message { get; set; }
        public bool IsResponse { get; set; }
        public int? ConversationId { get; set; }
    }
}

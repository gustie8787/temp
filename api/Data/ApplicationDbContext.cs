using Microsoft.EntityFrameworkCore;
using MyFullstackApp.Api.Models;

namespace MyFullstackApp.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Chat> Chats { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Persona> Personas { get; set; }
    }
}

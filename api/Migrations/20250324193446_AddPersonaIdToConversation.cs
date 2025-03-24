using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyFullstackApp.Api.Migrations
{
    public partial class AddPersonaIdToConversation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PersonaId",
                table: "Conversations",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PersonaId",
                table: "Conversations");
        }
    }
}

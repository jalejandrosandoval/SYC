using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class initMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id_Client = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroDoc = table.Column<int>(maxLength: 18, nullable: false),
                    Nombre = table.Column<string>(maxLength: 200, nullable: false),
                    Direccion = table.Column<string>(maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id_Client);
                });

            migrationBuilder.CreateTable(
                name: "Invoice_Statuses",
                columns: table => new
                {
                    CodeStatus = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoice_Statuses", x => x.CodeStatus);
                });

            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    Id_Factura = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    _IdClient = table.Column<int>(nullable: false),
                    ClientsId_Client = table.Column<int>(nullable: false),
                    CodeStatus = table.Column<int>(nullable: false),
                    StatusesCodeStatus = table.Column<int>(nullable: false),
                    Valor = table.Column<int>(maxLength: 18, nullable: false),
                    FechaFac = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.Id_Factura);
                    table.ForeignKey(
                        name: "FK_Invoices_Clients_ClientsId_Client",
                        column: x => x.ClientsId_Client,
                        principalTable: "Clients",
                        principalColumn: "Id_Client",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Invoices_Invoice_Statuses_StatusesCodeStatus",
                        column: x => x.StatusesCodeStatus,
                        principalTable: "Invoice_Statuses",
                        principalColumn: "CodeStatus",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Invoices_ClientsId_Client",
                table: "Invoices",
                column: "ClientsId_Client");

            migrationBuilder.CreateIndex(
                name: "IX_Invoices_StatusesCodeStatus",
                table: "Invoices",
                column: "StatusesCodeStatus");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Invoices");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Invoice_Statuses");
        }
    }
}

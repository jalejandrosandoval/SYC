using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class initMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    Id_Factura = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    _IdClient = table.Column<int>(nullable: false),
                    CodeStatus = table.Column<int>(nullable: false),
                    Valor = table.Column<int>(maxLength: 18, nullable: false),
                    FechaFac = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.Id_Factura);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id_Client = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroDoc = table.Column<int>(maxLength: 18, nullable: false),
                    Nombre = table.Column<string>(maxLength: 200, nullable: false),
                    Direccion = table.Column<string>(maxLength: 200, nullable: false),
                    InvoiceId_Factura = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id_Client);
                    table.ForeignKey(
                        name: "FK_Clients_Invoices_InvoiceId_Factura",
                        column: x => x.InvoiceId_Factura,
                        principalTable: "Invoices",
                        principalColumn: "Id_Factura",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Invoice_Statuses",
                columns: table => new
                {
                    CodeStatus = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(maxLength: 20, nullable: true),
                    InvoiceId_Factura = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoice_Statuses", x => x.CodeStatus);
                    table.ForeignKey(
                        name: "FK_Invoice_Statuses_Invoices_InvoiceId_Factura",
                        column: x => x.InvoiceId_Factura,
                        principalTable: "Invoices",
                        principalColumn: "Id_Factura",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clients_InvoiceId_Factura",
                table: "Clients",
                column: "InvoiceId_Factura");

            migrationBuilder.CreateIndex(
                name: "IX_Invoice_Statuses_InvoiceId_Factura",
                table: "Invoice_Statuses",
                column: "InvoiceId_Factura");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Invoice_Statuses");

            migrationBuilder.DropTable(
                name: "Invoices");
        }
    }
}

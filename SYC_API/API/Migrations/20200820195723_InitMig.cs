using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class InitMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    NumeroDoc = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Client_NDoc = table.Column<int>(nullable: false),
                    CodeStatus = table.Column<int>(nullable: false),
                    Valor = table.Column<string>(maxLength: 18, nullable: false),
                    FechaFac = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.NumeroDoc);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    NumeroDoc = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(maxLength: 200, nullable: false),
                    Direccion = table.Column<string>(maxLength: 200, nullable: false),
                    InvoiceNumeroDoc = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.NumeroDoc);
                    table.ForeignKey(
                        name: "FK_Clients_Invoices_InvoiceNumeroDoc",
                        column: x => x.InvoiceNumeroDoc,
                        principalTable: "Invoices",
                        principalColumn: "NumeroDoc",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Invoice_Statuses",
                columns: table => new
                {
                    CodeStatus = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(maxLength: 20, nullable: true),
                    InvoiceNumeroDoc = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoice_Statuses", x => x.CodeStatus);
                    table.ForeignKey(
                        name: "FK_Invoice_Statuses_Invoices_InvoiceNumeroDoc",
                        column: x => x.InvoiceNumeroDoc,
                        principalTable: "Invoices",
                        principalColumn: "NumeroDoc",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clients_InvoiceNumeroDoc",
                table: "Clients",
                column: "InvoiceNumeroDoc");

            migrationBuilder.CreateIndex(
                name: "IX_Invoice_Statuses_InvoiceNumeroDoc",
                table: "Invoice_Statuses",
                column: "InvoiceNumeroDoc");
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

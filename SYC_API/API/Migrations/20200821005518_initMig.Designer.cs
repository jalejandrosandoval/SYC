﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20200821005518_initMig")]
    partial class initMig
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Bussiness_Logic.Models.Clients.Client", b =>
                {
                    b.Property<int>("NumeroDoc")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Direccion")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.Property<int?>("InvoiceId_Factura")
                        .HasColumnType("int");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.HasKey("NumeroDoc");

                    b.HasIndex("InvoiceId_Factura");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("Bussiness_Logic.Models.Invoices.Invoice", b =>
                {
                    b.Property<int>("Id_Factura")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Client_NDoc")
                        .HasColumnType("int");

                    b.Property<int>("CodeStatus")
                        .HasColumnType("int");

                    b.Property<DateTime>("FechaFac")
                        .HasColumnType("datetime2");

                    b.Property<int>("Valor")
                        .HasColumnType("int")
                        .HasMaxLength(18);

                    b.HasKey("Id_Factura");

                    b.ToTable("Invoices");
                });

            modelBuilder.Entity("Bussiness_Logic.Models.Invoices.Invoice_Status", b =>
                {
                    b.Property<int>("CodeStatus")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(20)")
                        .HasMaxLength(20);

                    b.Property<int?>("InvoiceId_Factura")
                        .HasColumnType("int");

                    b.HasKey("CodeStatus");

                    b.HasIndex("InvoiceId_Factura");

                    b.ToTable("Invoice_Statuses");
                });

            modelBuilder.Entity("Bussiness_Logic.Models.Clients.Client", b =>
                {
                    b.HasOne("Bussiness_Logic.Models.Invoices.Invoice", null)
                        .WithMany("Clients")
                        .HasForeignKey("InvoiceId_Factura");
                });

            modelBuilder.Entity("Bussiness_Logic.Models.Invoices.Invoice_Status", b =>
                {
                    b.HasOne("Bussiness_Logic.Models.Invoices.Invoice", null)
                        .WithMany("Statuses")
                        .HasForeignKey("InvoiceId_Factura");
                });
#pragma warning restore 612, 618
        }
    }
}

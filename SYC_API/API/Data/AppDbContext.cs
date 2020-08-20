using Bussiness_Logic.Models.Clients;
using Bussiness_Logic.Models.Invoices;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext()
        {

        }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {


        }

        public DbSet<Client> Clients{ get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Invoice_Status> Invoice_Statuses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Client>().ToTable("Clients");

            modelBuilder.Entity<Invoice>().ToTable("Invoices");

            modelBuilder.Entity<Invoice_Status>().ToTable("Invoice_Statuses");

        }

    }
}

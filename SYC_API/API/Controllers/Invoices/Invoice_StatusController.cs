using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using Bussiness_Logic.Models.Invoices;

namespace API.Controllers.Invoices
{
    [Route("api/[controller]")]
    [ApiController]
    public class Invoice_StatusController : ControllerBase
    {
        private readonly AppDbContext _context;

        public Invoice_StatusController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invoice_Status>>> GetInvoice_Statuses()
        {
            return await _context.Invoice_Statuses.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice_Status>> GetInvoice_Status(int id)
        {
            var invoice_Status = await _context.Invoice_Statuses.FindAsync(id);

            if (invoice_Status == null)
            {
                return NotFound();
            }

            return invoice_Status;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvoice_Status(int id, Invoice_Status invoice_Status)
        {
            if (id != invoice_Status.CodeStatus)
            {
                return BadRequest();
            }

            _context.Entry(invoice_Status).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Invoice_StatusExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Invoice_Status
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Invoice_Status>> PostInvoice_Status(Invoice_Status invoice_Status)
        {
            _context.Invoice_Statuses.Add(invoice_Status);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvoice_Status", new { id = invoice_Status.CodeStatus }, invoice_Status);
        }

        // DELETE: api/Invoice_Status/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Invoice_Status>> DeleteInvoice_Status(int id)
        {
            var invoice_Status = await _context.Invoice_Statuses.FindAsync(id);
            if (invoice_Status == null)
            {
                return NotFound();
            }

            _context.Invoice_Statuses.Remove(invoice_Status);
            await _context.SaveChangesAsync();

            return invoice_Status;
        }

        private bool Invoice_StatusExists(int id)
        {
            return _context.Invoice_Statuses.Any(e => e.CodeStatus == id);
        }
    }
}

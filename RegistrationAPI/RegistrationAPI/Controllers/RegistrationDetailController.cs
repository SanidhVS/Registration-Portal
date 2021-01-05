using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegistrationAPI.Models;

namespace RegistrationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationDetailController : ControllerBase
    {
        private readonly RegistrationDetailContext _context;

        public RegistrationDetailController(RegistrationDetailContext context)
        {
            _context = context;
        }

        // GET: api/RegistrationDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RegistrationDetail>>> GetRegistrationDetails()
        {
            return await _context.RegistrationDetails.ToListAsync();
        }

        // GET: api/RegistrationDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RegistrationDetail>> GetRegistrationDetail(int id)
        {
            var registrationDetail = await _context.RegistrationDetails.FindAsync(id);

            if (registrationDetail == null)
            {
                return NotFound();
            }

            return registrationDetail;
        }

        // PUT: api/RegistrationDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegistrationDetail(int id, RegistrationDetail registrationDetail)
        {
            if (id != registrationDetail.RegistrationId)
            {
                return BadRequest();
            }

            _context.Entry(registrationDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegistrationDetailExists(id))
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

        // POST: api/RegistrationDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RegistrationDetail>> PostRegistrationDetail(RegistrationDetail registrationDetail)
        {
            _context.RegistrationDetails.Add(registrationDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegistrationDetail", new { id = registrationDetail.RegistrationId }, registrationDetail);
        }

        // DELETE: api/RegistrationDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRegistrationDetail(int id)
        {
            var registrationDetail = await _context.RegistrationDetails.FindAsync(id);
            if (registrationDetail == null)
            {
                return NotFound();
            }

            _context.RegistrationDetails.Remove(registrationDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RegistrationDetailExists(int id)
        {
            return _context.RegistrationDetails.Any(e => e.RegistrationId == id);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RegistrationAPI.Models
{
    public class RegistrationDetailContext : DbContext
    {
        public RegistrationDetailContext(DbContextOptions<RegistrationDetailContext> options):base(options)
        {

        }
        public DbSet<RegistrationDetail> RegistrationDetails { get; set; }
    }
}

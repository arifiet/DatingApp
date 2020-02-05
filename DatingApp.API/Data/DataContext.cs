using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Like>()
                .HasKey(k => new {k.LikerId, k.LikeeId}); // this is for making combination of both as Primary Key as 
            // we didn't want EF to take the default int Propery(any among both) as primary Key, refer Lecture 153 for more info

            builder.Entity<Like>()
                .HasOne(u => u.Likee)
                .WithMany(u => u.Likers)
                .HasForeignKey(u => u.LikeeId)      // this is for creating one to many relationship 
                .OnDelete(DeleteBehavior.Restrict); // among Likee and Likers , a Likee can have many Likers

            builder.Entity<Like>()
                .HasOne(u => u.Liker)
                .WithMany(u => u.Likees)
                .HasForeignKey(u => u.LikerId)      // this is for creating one to many relationship 
                .OnDelete(DeleteBehavior.Restrict); // among Liker and Likees , a Likee can have many Likers


        }

    }
}
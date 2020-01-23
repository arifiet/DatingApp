using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public string PublicID { get; set; }
        public User User { get; set; }   // these user properties are added to have a foreign key relation 
        public int UserId { get; set; }  // and have a cascade delete if user is deleted , if not included will have restricted delete 
    }
}
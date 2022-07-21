using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MovieTutorial.MovieDB.Forms
{
    [FormScript("MovieDB.Person")]
    [BasedOnRow(typeof(PersonRow), CheckNames = true)]
    public class PersonForm
    {
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public String PrimaryImage { get; set; }
        public String GalleryImages { get; set; }
        public DateTime BirthDate { get; set; }
        public string BirthPlace { get; set; }
        public int Gender { get; set; }
        public int Height { get; set; }
    }
}
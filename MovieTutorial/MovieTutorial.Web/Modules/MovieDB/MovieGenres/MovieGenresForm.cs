using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MovieTutorial.MovieDB.Forms
{
    [FormScript("MovieDB.MovieGenres")]
    [BasedOnRow(typeof(MovieGenresRow), CheckNames = true)]
    public class MovieGenresForm
    {
        public int MovieId { get; set; }
        public int GenreId { get; set; }
    }
}
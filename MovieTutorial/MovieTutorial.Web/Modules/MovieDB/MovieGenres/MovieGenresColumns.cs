using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MovieTutorial.MovieDB.Columns
{
    [ColumnsScript("MovieDB.MovieGenres")]
    [BasedOnRow(typeof(MovieGenresRow), CheckNames = true)]
    public class MovieGenresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int MovieGenreId { get; set; }
        public string MovieTitle { get; set; }
        public string GenreName { get; set; }
    }
}
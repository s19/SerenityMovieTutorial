using System;
using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20220720_155100)]
    public class DefaultDB_20220720_155100_SampleGenres : Migration
    {
        public override void Up()
        {
            Insert.IntoTable("Genre").InSchema("mov")
                .Row(new
                {
                    Name = "Action"
                })
                .Row(new
                {
                    Name = "Drama"
                })
                .Row(new
                {
                    Name = "Comedy"
                })
                .Row(new
                {
                    Name = "Sci-fi"
                })
                .Row(new
                {
                    Name = "Fantasy"
                })
                .Row(new
                {
                    Name = "Documentary"
                });
        }
        public override void Down()
        {
        }
    }
}

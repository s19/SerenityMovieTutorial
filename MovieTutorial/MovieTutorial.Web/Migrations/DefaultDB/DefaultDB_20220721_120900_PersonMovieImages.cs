using System;
using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20220721_120900)]
    public class DefaultDB_20220721_120900_PersonMovieImages : Migration
    {
        public override void Up()
        {
            Alter.Table("Person").InSchema("mov")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();

            Alter.Table("Movie").InSchema("mov")
                .AddColumn("PrimaryImage").AsString(100).Nullable()
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();
        }

        public override void Down()
        {
        }
    }
}

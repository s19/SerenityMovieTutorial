using System;
using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20210719_155300)]
    public class DefaultDB_20210719_155300_MovieTable : Migration
    {
        public override void Up()
        {
            Create.Schema("mov");
            Create.Table("Movie").InSchema("mov") 
                .WithColumn("MovieId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Storyline").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Year").AsInt32().Nullable()
                .WithColumn("ReleaseDate").AsDateTime().Nullable()
                .WithColumn("Runtime").AsInt32().Nullable();
        }

        public override void Down()
        {
        }
    }
}

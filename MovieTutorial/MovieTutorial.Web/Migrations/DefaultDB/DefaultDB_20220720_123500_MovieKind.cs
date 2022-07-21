using System;
using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20220720123500)]
    public class DefaultDB_20220720_123500_MovieKind : Migration
    {
        public override void Up()
        {
            Alter.Table("Movie").InSchema("mov")
                .AddColumn("Kind").AsInt32().NotNullable()
                    .WithDefaultValue(1);
        }

        public override void Down()
        {
        }
    }
}

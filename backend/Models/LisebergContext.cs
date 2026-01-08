using backend.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class LisebergContext : DbContext, IParkInterface
{
   public LisebergContext()
   {
   }

   public LisebergContext(DbContextOptions<LisebergContext> options): base(options)
   {
   }

   public virtual DbSet<Attraction> Attractions { get; set; }

   public virtual DbSet<AttractionMetric> AttractionMetrics { get; set; }

   protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
   {
   }
   protected override void OnModelCreating(ModelBuilder modelBuilder)
   {
      modelBuilder
         .UseCollation("utf8mb4_general_ci")
         .HasCharSet("utf8mb4");

      modelBuilder.Entity<Attraction>(entity =>
      {
         entity.HasKey(e => e.AId).HasName("PRIMARY");

         entity.ToTable("attractions");

         entity.HasIndex(e => e.AId, "a_id").IsUnique();

         entity.HasIndex(e => e.Name, "name").IsUnique();

         entity.Property(e => e.AId)
            .ValueGeneratedNever()
            .HasColumnType("int(11)")
            .HasColumnName("a_id");
         entity.Property(e => e.BuildYear)
            .HasColumnType("int(11)")
            .HasColumnName("build_year");
         entity.Property(e => e.ChildAttraction)
            .HasColumnType("tinyint(4)")
            .HasColumnName("child_attraction");
         entity.Property(e => e.Height)
            .HasColumnType("int(11)")
            .HasColumnName("height");
         entity.Property(e => e.Latitude).HasColumnName("latitude");
         entity.Property(e => e.Longitude).HasColumnName("longitude");
         entity.Property(e => e.Manufacturer)
            .HasMaxLength(255)
            .HasColumnName("manufacturer");
         entity.Property(e => e.MaxSpeed)
            .HasColumnType("int(11)")
            .HasColumnName("max_speed");
         entity.Property(e => e.Name).HasColumnName("name");
         entity.Property(e => e.RailLength)
            .HasColumnType("int(11)")
            .HasColumnName("rail_length");
         entity.Property(e => e.RideTime)
            .HasColumnType("int(11)")
            .HasColumnName("ride_time");
         entity.Property(e => e.Status)
            .HasMaxLength(255)
            .HasColumnName("status");
         entity.Property(e => e.InUse)
            .HasColumnType("tinyint(1)")
            .HasColumnName("in_use");
      });

      modelBuilder.Entity<AttractionMetric>(entity =>
      {
         entity.HasKey(e => new { e.Time, e.AId })
            .HasName("PRIMARY")
            .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

         entity.ToTable("attraction_metrics");

         entity.HasIndex(e => e.AId, "a_id");

         entity.Property(e => e.Time)
            .HasColumnType("datetime")
            .HasColumnName("time");
         entity.Property(e => e.AId)
            .HasColumnType("int(11)")
            .HasColumnName("a_id");
         entity.Property(e => e.QueueTime)
            .HasColumnType("int(11)")
            .HasColumnName("queue_time");

         entity.HasOne(d => d.AIdNavigation).WithMany(p => p.AttractionMetrics)
            .HasForeignKey(d => d.AId)
            .OnDelete(DeleteBehavior.ClientSetNull)
            .HasConstraintName("attraction_metrics_ibfk_1");
      });

      OnModelCreatingPartial(modelBuilder);
   }

   partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

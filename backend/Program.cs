using backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
var gronalundConnectionString = builder.Configuration.GetConnectionString("gronalunddb");
var lisebergConnectionString = builder.Configuration.GetConnectionString("lisebergdb");


builder.Services.AddDbContext<GronalundContext>(options => 
{
   options.UseMySql(gronalundConnectionString, 
   ServerVersion.AutoDetect(gronalundConnectionString));
});


builder.Services.AddDbContext<LisebergContext>(options =>
{
   options.UseMySql(lisebergConnectionString,
   ServerVersion.AutoDetect(lisebergConnectionString));
});

var app = builder.Build();

app.MapGet("/test", (LisebergContext ldb, GronalundContext gdb) =>
{
   var count = ldb.Attractions.Count();
   return $"Antal attraktioner, Liseberg: {count}, Antal attraktioner, Gröna Lund: {gdb.Attractions.Count()}";
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
   app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

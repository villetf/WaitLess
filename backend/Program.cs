using backend.Models;
using backend.Models.Interfaces;
using backend.Models.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddScoped<IAttractionRepository, AttractionRepository>();
builder.Services.AddScoped<IParkRepository, ParkRepository>();
builder.Services.AddScoped<IQueueForecastRepository, QueueForecastRepository>();

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

builder.Services.AddCors(opt => {
   opt.AddDefaultPolicy(policy => 
   {
      policy.AllowAnyHeader();
      policy.AllowAnyMethod();
      policy.AllowAnyOrigin();
   });
});

var app = builder.Build();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
   app.MapOpenApi();

   app.UseSwaggerUI(options =>
   {
      options.SwaggerEndpoint("/openapi/v1.json", "v1");
   });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

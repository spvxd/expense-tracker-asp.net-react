using BusinessLogic;
using DataAccess;

namespace WebApi;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowReactApp", policy =>
            {
                policy.WithOrigins("http://localhost:5173") 
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
        });
        builder.Services.AddAuthorization();
        builder.Services.AddOpenApi();
        builder.Services.AddDataAccess();
        builder.Services.AddBusinessLogic();
        builder.Services.AddControllers();
        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();
        app.MapControllers();

        app.UseCors("AllowReactApp");
        app.Run();
    }
}
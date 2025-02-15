using DataAccess.Models;
using DataAccess.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace DataAccess;

public static class Extensions
{
    public static IServiceCollection AddDataAccess(this IServiceCollection services)
    {
        services.AddDbContext<AppContext>(x =>
        {
            x.UseNpgsql("Host=localhost;Database=Expense;Username=postgres;Password=postgres");
        });
        services.AddScoped<IRepository<Expense>, ExpenseRepository>();
        services.AddScoped<IRepository<Income>, IncomeRepository>();
        return services;
    }
}
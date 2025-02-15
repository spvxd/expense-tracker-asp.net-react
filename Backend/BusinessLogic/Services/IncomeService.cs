using DataAccess.Models;
using DataAccess.Repository;

namespace BusinessLogic.Services;

public class IncomeService : IIncomeService
{
    private readonly IRepository<Income> _incomeRepository;

    public IncomeService(IRepository<Income> incomeRepository)
    {
        _incomeRepository = incomeRepository;
    }

    public async Task<List<Income>> GetAllIncomesAsync()
    {
        return await _incomeRepository.GetAllAsync();
    }

    public async Task CreateIncomeAsync(string title, int amount,  string category, string description, DateOnly date)
    {
        var income = new Income
        {
            Title = title,
            Amount = amount,
           
            Category = category,
            Description = description,
            Date = date
        };
        await _incomeRepository.CreateAsync(income);
    }

    public Task DeleteIncomeAsync(int id)
    {
        return _incomeRepository.DeleteAsync(id);
    }
}
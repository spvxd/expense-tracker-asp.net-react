using DataAccess.Models;

namespace BusinessLogic.Services;

public interface IIncomeService
{
    Task<List<Income>> GetAllIncomesAsync();
    Task CreateIncomeAsync(string title, int amount,  string category, string description, DateOnly date);
    Task DeleteIncomeAsync(int id);
}
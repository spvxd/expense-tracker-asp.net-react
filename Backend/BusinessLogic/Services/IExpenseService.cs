using DataAccess.Models;

namespace BusinessLogic.Services;

public interface IExpenseService
{
    Task<List<Expense>> GetAllExpensesAsync();
    Task CreateExpenseAsync(string title, int amount,  string category, string description, DateOnly date);
    Task DeleteExpenseAsync(int id);
}
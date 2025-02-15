using DataAccess.Models;
using DataAccess.Repository;

namespace BusinessLogic.Services;

public class ExpenseService : IExpenseService
{
    private readonly IRepository<Expense> _expenseRepository;

    public ExpenseService(IRepository<Expense> expenseRepository)
    {
        _expenseRepository = expenseRepository;
    }

    public async Task<List<Expense>> GetAllExpensesAsync()
    {
       return await _expenseRepository.GetAllAsync();
    }

    public async Task CreateExpenseAsync(string title, int amount, string category, string description,
        DateOnly date)
    {
        var expense = new Expense
        {
            Title = title,
            Amount = amount,
            Category = category,
            Description = description,
            Date = date
        };
        await _expenseRepository.CreateAsync(expense);
    }

    public async Task DeleteExpenseAsync(int id)
    {
        await _expenseRepository.DeleteAsync(id);
    }
}
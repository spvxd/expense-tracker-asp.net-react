using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repository;

public class ExpenseRepository: IRepository<Expense>
{
    private readonly AppContext _context;

    public ExpenseRepository(AppContext context)
    {
        _context = context;
    }

    public async Task<List<Expense>> GetAllAsync()
    {
        return await _context.Expenses.ToListAsync(); 
    }

    public async Task<Expense> CreateAsync(Expense expense)
    {
        await _context.Expenses.AddAsync(expense);
        await _context.SaveChangesAsync();
        return expense;
        
    }

   

    public async Task DeleteAsync(int id)
    {
        var expenseToDelete = await _context.Expenses.FirstOrDefaultAsync(x => x.Id == id);
        _context.Expenses.Remove(expenseToDelete);
        await _context.SaveChangesAsync();
    }

    
    
}
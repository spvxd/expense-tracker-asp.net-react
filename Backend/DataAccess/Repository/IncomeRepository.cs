using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repository;

public class IncomeRepository : IRepository<Income>
{
    private readonly AppContext _context;

    public IncomeRepository(AppContext context)
    {
        _context = context;
    }

    public async Task<List<Income>> GetAllAsync()
    {
        return await _context.Incomes.ToListAsync();
    }

    public async Task<Income> CreateAsync(Income income)
    {
        await _context.Incomes.AddAsync(income);
        await _context.SaveChangesAsync();
        return income;
    }

    public async Task DeleteAsync(int id)
    {
        var deleteIncome = await _context.Incomes.FirstOrDefaultAsync(x => x.Id == id);
        _context.Incomes.Remove(deleteIncome);
        await _context.SaveChangesAsync();
    }
}
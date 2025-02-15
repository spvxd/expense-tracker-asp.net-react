using System.Collections;
using DataAccess.Models;
using DataAccess.Repository;

namespace BusinessLogic.Services;

public class TransactionService : ITransactionService
{
    private readonly IIncomeService _incomeService;
    private readonly IExpenseService _expenseService;

    public TransactionService(IIncomeService incomeService, IExpenseService expenseService)
    {
        _incomeService = incomeService;
        _expenseService = expenseService;
    }


    public async Task<List<Transaction>> GetAllTransactionsAsync()
    {
        var expense =  _expenseService.GetAllExpensesAsync().Result.Cast<Transaction>();
        var incomes = _incomeService.GetAllIncomesAsync().Result.Cast<Transaction>();

        var allTransactions = expense.Concat(incomes)
            .OrderBy(t => t.Date)
            .ToList();
        return allTransactions;
    }
}
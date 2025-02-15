using System.Collections;
using DataAccess.Models;

namespace BusinessLogic.Services;

public interface ITransactionService
{
    Task<List<Transaction>> GetAllTransactionsAsync(); 
}
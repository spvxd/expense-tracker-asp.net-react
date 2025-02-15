using DataAccess.Models;

namespace DataAccess.Repository;

public interface ITransactionRepository
{
    Task<List<Transaction>> GetAllTransactionsAsync();
    
}
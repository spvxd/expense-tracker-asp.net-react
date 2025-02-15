using DataAccess.Models;

namespace DataAccess.Repository;

public interface IRepository<T> where T : class
{
    Task<List<T>> GetAllAsync();
    Task<T> CreateAsync(T entity);
    Task DeleteAsync(int id);
}
namespace DataAccess.Models;

public abstract class Transaction
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int Amount { get; set; }
    public DateOnly Date { get; set; }
    public string Category { get; set; }
    public string Description { get; set; }
}
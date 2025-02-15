using System.Text.Json;
using BusinessLogic.Services;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTO;

namespace WebApi.Controllers;

[ApiController]
[Route("Expenses")]
public class ExpenseController : ControllerBase
{
    private readonly IExpenseService _expenseService;

    public ExpenseController(IExpenseService expenseService)
    {
        _expenseService = expenseService;
    }

    [HttpGet]
    public async Task<IActionResult> GetExpensesAsync()
    {
        var expenses = await _expenseService.GetAllExpensesAsync();
        return Ok(expenses);
    }

    [HttpPost]
    public async Task<IActionResult> AddExpenseAsync([FromBody] CreateExpenseDto expense)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        await _expenseService.CreateExpenseAsync(expense.Title, expense.Amount,  expense.Category,
            expense.Description, expense.Date);
        return Created();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteExpenseAsync([FromRoute] int id)
    {
        await _expenseService.DeleteExpenseAsync(id);
        return NoContent();
    }
}
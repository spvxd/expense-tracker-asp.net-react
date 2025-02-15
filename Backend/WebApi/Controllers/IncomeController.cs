using BusinessLogic.Services;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTO;

namespace WebApi;

[ApiController]
[Route("Incomes")]
public class IncomeController : ControllerBase
{
    private readonly IIncomeService _incomeService;

    public IncomeController(IIncomeService incomeService)
    {
        _incomeService = incomeService;
    }

    
    [HttpGet]
    public async Task<IActionResult> GetIncomesAsync()
    {
        var income =  await _incomeService.GetAllIncomesAsync();
        return Ok(income);
    }

    [HttpPost]
    public async Task<IActionResult> CreateIncomeAsync([FromBody] CreateIncomeDto income)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        await _incomeService.CreateIncomeAsync(income.Title, income.Amount,  income.Category,
            income.Description, income.Date);
        return Created();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteIncomeAsync([FromRoute] int id)
    {
        await _incomeService.DeleteIncomeAsync(id);
        return NoContent();
    }
    
    
    
}
using BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;
[ApiController]
[Route("Transactions")]
public class TransactionsController: ControllerBase
{
    private readonly ITransactionService _transactionService;

    public TransactionsController( ITransactionService transactionService)
    {
        _transactionService = transactionService;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAllTransactionsAsync()
    {
        var transactions = await _transactionService.GetAllTransactionsAsync();
       
        return Ok(transactions);
    }
}
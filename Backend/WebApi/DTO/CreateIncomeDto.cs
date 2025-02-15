using System.ComponentModel.DataAnnotations;

namespace WebApi.DTO;

public class CreateIncomeDto
{
    [Required] public string Title { get; set; }
    [Required] public int Amount { get; set; }
    [Required] public DateOnly Date { get; set; }
    [Required] public string Category { get; set; }
    [Required] public string Description { get; set; }
}
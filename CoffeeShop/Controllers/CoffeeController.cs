using CoffeeShop.Models;
using CoffeeShop.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShop.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CoffeeController : ControllerBase
{
    private readonly ICoffeeRepository _coffeeRepository;
    public CoffeeController(ICoffeeRepository coffeeRepository)
    {
        _coffeeRepository = coffeeRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_coffeeRepository.GetAll());
    }
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var coffee = _coffeeRepository.Get(id);
        if (coffee == null)
        {
            return NotFound();
        }
        return Ok(coffee);
    }

    [HttpPost]
    public IActionResult Post(Coffee coffee)
    {
        _coffeeRepository.Add(coffee);
        return CreatedAtAction("Post", new { id = coffee.Id }, coffee);
    }
    [HttpPut("{id}")]
    public IActionResult Put(int id, Coffee coffee)
    {
        if (id != coffee.Id)
        {
            return BadRequest();
        }
        _coffeeRepository.Update(coffee);
        return NoContent();
    }

    [HttpDelete("{id}")] 
    public IActionResult Delete(int id)
    {
        _coffeeRepository.Delete(id);
        return NoContent();
    }
}

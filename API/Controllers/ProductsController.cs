using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _storeContext;
        public ProductsController(StoreContext storecontext)
        {
            _storeContext = storecontext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllProductsListAsync()
        {
            return await _storeContext.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Product>>> GetProductByIdAsync(int id)
        {
            return await _storeContext.Products.Where(x => x.Id == id).ToListAsync();
        }

        
    }
}
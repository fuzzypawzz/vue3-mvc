using Microsoft.AspNetCore.Mvc;
using vue3_mvc.ViewModels;

namespace vue3_mvc.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var viewModel = new Test()
        {
            Name = "Fuzzy",
            Age = 31
        };
        
        return View(viewModel);
    }
}
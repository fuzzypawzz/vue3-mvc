using Microsoft.AspNetCore.Mvc;

namespace vue3_mvc.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
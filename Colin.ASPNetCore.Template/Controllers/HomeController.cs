using Colin.ASPNetCore.Template.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Colin.ASPNetCore.Template.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {

        }
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetDemoTable(int page, int limit)
        {
            ResultMessage<DemoTable> datas = new ResultMessage<DemoTable>();
            datas.Data.AddRange(new List<DemoTable>
            {
                new DemoTable
            {
                Id = 1,
                UserName = "Test1"
            }, new DemoTable
            {
                Id = 2,
                UserName = "Test2"
            },
                new DemoTable
            {
                Id = 3,
                UserName = "Test3"
            }, new DemoTable
            {
                Id = 4,
                UserName = "Test4"
            },
                new DemoTable
            {
                Id = 5,
                UserName = "Test5"
            }, new DemoTable
            {
                Id = 6,
                UserName = "Test6"
            }
            });
            return Json(datas);
        }
    }
}

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
        public ActionResult Test()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetDemoTable(int page, int limit)
        {
            ResultMessage<DemoTable> datas = new ResultMessage<DemoTable>();
            datas.data.AddRange(new List<DemoTable>
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
            datas.count = datas.data.Count;
            return Json(datas);
        }
        [HttpGet]
        public ActionResult GetMainMenu()
        {
            var menu = new MainMenu
            {
                Code = 1000,
                Text = "系统管理",
                Href = "javascript:;",
                IsItemed = false,
                SubItems = new List<MainMenu>
                {
                    new MainMenu
                    {
                        Code = 10001,
                        Text = "用户管理",
                        Href = "",
                        IsItemed = false,
                        IsOpenForm = true
                    },
                    new MainMenu
                    {
                        Code = 10002,
                        Text = "权限管理",
                        Href = "javascript:;",
                        IsItemed = false,
                        SubItems = new List<MainMenu>
                        {
                            new MainMenu
                            {
                                Code = 100021,
                                Text = "分组权限",
                                Href = "https://www.baidu.com/",
                                IsItemed = false,
                                IsOpenForm = true
                            },
                            new MainMenu
                            {
                                Code = 100022,
                                Text = "角色权限",
                                Href = "/home/test",
                                IsItemed = false,
                                IsOpenForm = true
                            },
                            new MainMenu
                            {
                                Code = 100023,
                                Text = "用户权限",
                                Href = "javascript:;",
                                IsItemed = false,
                                IsOpenForm = true
                            },
                            new MainMenu
                            {
                                Code = 100024,
                                Text = "数据权限",
                                Href = "javascript:;",
                                IsItemed = false,
                                IsOpenForm = true
                            }
                        }
                    },
                    new MainMenu
                    {
                        Code = 10003,
                        Text = "系统参数",
                        Href = "javascript:;",
                        IsItemed = false,
                        IsOpenForm = true
                    },
                    new MainMenu
                    {
                        Code = 10004,
                        Text = "测试",
                        Href = "javascript:;",
                        IsItemed = false,
                        IsOpenForm = true
                    },
                    new MainMenu
                    {
                        Code = 10005,
                        Text = "没有用",
                        Href = "javascript:;",
                        IsItemed = false,
                        IsOpenForm = true
                    }
                }
            };
            return Json(menu);
        }
    }
}

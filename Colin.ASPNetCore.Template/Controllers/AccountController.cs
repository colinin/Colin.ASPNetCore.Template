using Colin.ASPNetCore.Template.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Colin.ASPNetCore.Template.Controllers
{
    public class AccountController : Controller
    {
        public AccountController()
        {

        }
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login([FromBody] LoginModel loginModel, string returnUrl = "/home/index")
        {
            if (loginModel.UserName == "admin" && loginModel.Password == "admin")
            {
                return Json(returnUrl);
            }
            else
            {
                AppReponse appReponse = new AppReponse
                {
                    ErrorCode = (int)HttpStatusCode.Unauthorized,
                    ErrMsg = "用户密码错误"
                };
                Response.StatusCode = appReponse.ErrorCode;
                return Json(appReponse);
            }
        }
    }
}

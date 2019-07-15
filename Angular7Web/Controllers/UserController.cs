using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular7Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {       
        [HttpPost]
        public ActionResult<IEnumerable> Login(string user_email, string user_password)
        {
            string[] _usersArr = { "bp@test.com" };

            if (_usersArr.Contains(user_email))
                return "Successfully Logged-in";
            else
                return "Failed";
        }

        // GET api/values
        [HttpGet]
        public ActionResult<UserDetails[]> Get()
        {
            IList<UserDetails> usrList = new List<UserDetails>();
            usrList.Add(new UserDetails() { user_name = "BP", user_email = "bp@test.com", city_id = 1 });
            usrList.Add(new UserDetails() { user_name = "GP", user_email = "mb@test.com", city_id = 3 });

            return usrList.ToArray();
        }


    }

    public class UserDetails
    {
        public string user_name { get; set; }
        public string user_email { get; set; }
        public  int city_id { get; set; }

    }

}
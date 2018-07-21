using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Colin.ASPNetCore.Template.Models
{
    public class ResultMessage<T>
    {
        public int code { get; set; }
        public string msg { get; set; }
        public int count { get; set; }
        public List<T> data { get; set; }
        public ResultMessage()
        {
            data = new List<T>();
        }
    }
}

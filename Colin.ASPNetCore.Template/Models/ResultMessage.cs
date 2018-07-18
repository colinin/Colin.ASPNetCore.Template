using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Colin.ASPNetCore.Template.Models
{
    public class ResultMessage<T>
    {
        public int Code { get; set; }
        public string Msg { get; set; }
        public int Count { get; set; }
        public List<T> Data { get; set; }
        public ResultMessage()
        {
            Data = new List<T>();
        }
    }
}

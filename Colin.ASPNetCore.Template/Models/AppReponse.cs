using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Colin.ASPNetCore.Template.Models
{
    public class AppReponse
    {
        public int ErrorCode { get; set; }
        public string ErrMsg { get; set; }
        public object Result { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Colin.ASPNetCore.Template.Models
{
    public class MainMenu
    {
        public int Code { get; set; }
        public string Text { get; set; }
        public string Href { get; set; }
        public List<MainMenu> SubItems { get; set; }
        public bool IsItemed { get; set; }
        public bool IsOpenForm { get; set; }
    }
}

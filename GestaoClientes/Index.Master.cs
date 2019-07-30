using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GestaoClientes
{

    public partial class Index : System.Web.UI.MasterPage
    {
        public static DateTime tmpAtendimento;

        protected void Logout()
        {
            Session.Abandon();
            Session.Clear();
            Response.Redirect("Login.aspx");
        }
    }
}
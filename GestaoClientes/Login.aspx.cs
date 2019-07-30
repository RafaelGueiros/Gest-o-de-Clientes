using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using GestaoClientes_DTO;
using GestaoClientes_DAL;
using GestaoClientes_DTO.POCOs;

namespace GestaoClientes
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request.QueryString.ToString() == "true")
                {
                    Session.Abandon();
                    Session.Clear();
                    //Tabulador.novoAtendimento = false;
                }
            }
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            Usuario usuario = Login_DAO.EfetuaLogin(txtLogin.Text.ToString(), txtSenha.Text.ToString());

            if (usuario.Login > 0)
            {
                Session["matricula"] = usuario.Login;
                Session["nome"] = usuario.Nome;
                Session["perfil"] = usuario.Perfil;
                Response.Redirect("Clientes.aspx");
            }
        }
    }
}
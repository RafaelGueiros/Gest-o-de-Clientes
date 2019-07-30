using GestaoClientes_DTO.POCOs;
using GestaoClientes_DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;

namespace GestaoClientes
{
    public partial class Clientes : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Session["tipo"] = 1;
                Session["acessoRel"] = "SIM";
                CarregaClientes(gdvClientes);
                //Session["clientes"] = CarregaClientes();
            }
        }

        protected void CarregaClientes(GridView grid, string nome = "", long cpf = 0)
        {
            grid.DataSource = Cliente_DAO.ListaClientes(nome, cpf);
            grid.DataBind();

            //DataTable tab = Cliente_DAO.ListaClientes(nome, cpf);
            //string montaTab = "";

            //StringBuilder builder = new StringBuilder();
            //for (int i = 0; i < tab.Rows.Count; i++)
            //{
            //    montaTab += "<TR>";
            //    montaTab += "<TD>" + tab.Rows[i]["NOME"].ToString() + "</TD>";
            //    montaTab += "<TD>" + tab.Rows[i]["CPF"].ToString() + "</TD>";
            //    montaTab += "<TD>" + tab.Rows[i]["tipoCliente"].ToString() + "</TD>";
            //    montaTab += "<TD>" + tab.Rows[i]["Sexo"].ToString() + "</TD>";
            //    montaTab += "<TD>" + tab.Rows[i]["situacaoCliente"].ToString() + "</TD>";

            //    montaTab += "<td style=\"text-align:center\"><asp:ButtonField ButtonType=\"Button\" ID=" + tab.Rows[i]["CPF"].ToString() + " runat=\"server\" OnClick=\"btnNovo_Click\" class=\"btn btn-sm-custom btn-info glyphicon glyphicon glyphicon-new-window\" /></TD>";
            //    //montaTab += "<td style=\"text-align:center\"><input type=\"submit\" id=" + tab.Rows[i]["CPF"].ToString() + " OnClick=\"<%btnEditar_Click()%>\"class=\"btn btn-sm-custom btn-info\"><span class=\"glyphicon glyphicon glyphicon - new- window\"></span></TD>";
            //    montaTab += "<TD></TD>";

            //    montaTab += "</TR>";
            //}

            //return montaTab;
        }

        protected void btnEditar_Click(object sender, EventArgs e)
        {
            ClientScript.RegisterClientScriptBlock(this.GetType(), "Teste", "alert('Teste');", true);
        }

        protected void btnNovo_Click(object sender, EventArgs e)
        {
            Response.Redirect("NovoCliente.aspx");
        }

        protected void btnLista_Click(object sender, EventArgs e)
        {
            Response.Redirect("Clientes.aspx");
        }

        protected void gdvClientes_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {

        }

        protected void gdvClientes_RowUpdating(object sender, GridViewUpdateEventArgs e)
        {

        }

        protected void gdvClientes_RowCommand(object sender, GridViewCommandEventArgs e)
        {

            if (e.CommandName == "Atualizar")
            {
                Response.Redirect("EditarCliente.aspx");
                //int index = Convert.ToInt32(e.CommandArgument);
                //GridViewRow row = gdvClientes.Rows[index];
                //int id = Convert.ToInt32(row.Cells[0].Text);
                //hdId.Value = id.ToString();

                //DataTable dt = BLLEmissora.PesquisarEmissoraTV(id);
                //txtNome.Text = dt.Rows[0]["NomeEmissora"].ToString();
                //txtOrdem.Text = dt.Rows[0]["Ordem"].ToString();
                //ddlUF.Value = dt.Rows[0]["UF"].ToString();
            }
            if (e.CommandName == "Excluir")
            {


                //gdvProdutos.DataSource = service.ExcluirCliente();
                //gdvProdutos.DataSource = service.GetCliente();
                //gdvProdutos.DataBind();

                //int index = Convert.ToInt32(e.CommandArgument);
                //GridViewRow row = gvEmissoraTV.Rows[index];
                //int id = Convert.ToInt32(row.Cells[0].Text);
                //hdId.Value = id.ToString();

                //int retorno;
                //string txtMsg = "";
                //DataTable dt = ConstruirDataTable();
                //retorno = BLLEmissora.Validar(dt, Operacao.Exclusao);
                //if (retorno == 0)
                //{
                //    BLLEmissora.ExcluirEmissoraTV(id, usuario);
                //    HtmlUtil.WindowMessage(Page, "Emissora excluída com sucesso!");

                //    gvEmissoraTV.DataSource = BLLEmissora.ListarEmissoraTVComUF();
                //    gvEmissoraTV.DataBind();
                //}
            }
        }
    }
}
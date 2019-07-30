using GestaoClientes_DTO.POCOs;
using GestaoClientes_DAL;
using GestaoClientes_BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GestaoClientes
{
    public partial class EditarCliente : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                CarregaComboTipoCliente();
                CarregaComboSituacaoCliente();
            }
        }

        protected void btnNovo_Click(object sender, EventArgs e)
        {
            Response.Redirect("NovoCliente.aspx");
        }

        protected void btnLista_Click(object sender, EventArgs e)
        {
            Response.Redirect("Clientes.aspx");
        }

        private void CarregaComboTipoCliente()
        {
            cboTipoCli.DataSource = Cliente_DAO.ListaTipoCliente();
            cboTipoCli.DataTextField = "Descricao";
            cboTipoCli.DataValueField = "id";
            cboTipoCli.DataBind();
            cboTipoCli.Items.Insert(0, new ListItem("Selecione..", "0"));
        }

        private void CarregaComboSituacaoCliente()
        {
            cboSituacaoCli.DataSource = Cliente_DAO.ListaSituacaoCliente();
            cboSituacaoCli.DataTextField = "Descricao";
            cboSituacaoCli.DataValueField = "id";
            cboSituacaoCli.DataBind();
            cboSituacaoCli.Items.Insert(0, new ListItem("Selecione..", "0"));
        }

        public void CarregaTela(Cliente cliente)
        {
            txtNome.Text = cliente.Nome;
            txtCPF.Text = cliente.Cpf.ToString();
            cboTipoCli.SelectedValue = cliente.TipoCliente;
            cboSexo.SelectedValue = cliente.Sexo;
            cboSituacaoCli.SelectedValue = cliente.SituacaoCliente;
        }

        protected void btnSalvar_Click(object sender, EventArgs e)
        {
            if (VerificaCampos())
            {
                Cliente cliente = new Cliente();

                cliente.Nome = txtNome.Text.ToString();
                cliente.Cpf = Convert.ToInt64(txtCPF.Text);
                cliente.TipoCliente = cboTipoCli.SelectedValue.ToString();
                cliente.Sexo = cboSexo.SelectedItem.ToString();
                cliente.SituacaoCliente = cboSituacaoCli.SelectedValue.ToString();

                if (Cliente_DAO.AlterarCliente(cliente))
                {
                    ClientScript.RegisterClientScriptBlock(this.GetType(), "Alterado com sucesso", "alert('Alterado com sucesso');", true);
                    Response.Redirect("Clientes.aspx");
                }
            }
        }

        private bool VerificaCampos()
        {
            string cpf = txtCPF.Text.ToString();

            if (txtNome.Text.ToString() == "")
            {
                ClientScript.RegisterClientScriptBlock(this.GetType(), "Informe o Nome", "alert('Informe o Nome do Cliente');", true);
                return false;
            }

            if (!Validacoes.IsCnpj(cpf) && !Validacoes.IsCpf(cpf))
            {
                ClientScript.RegisterClientScriptBlock(this.GetType(), "Informe o CPF", "alert('Informe o CPF do Cliente');", true);
                return false;
            }

            if (cboTipoCli.SelectedIndex <= 0)
            {
                ClientScript.RegisterClientScriptBlock(this.GetType(), "Informe o Tipo do Cliente", "alert('Informe o Tipo do Cliente');", true);
                return false;
            }

            if (cboSexo.SelectedIndex <= 0)
            {
                ClientScript.RegisterClientScriptBlock(this.GetType(), "Informe o Sexo do Cliente", "alert('Informe o Sexo do Cliente');", true);
                return false;
            }

            if (cboSituacaoCli.SelectedIndex <= 0)
            {
                ClientScript.RegisterClientScriptBlock(this.GetType(), "Informe a Situação do Cliente", "alert('Informe a Situação do Cliente');", true);
                return false;
            }

            return true;
        }
    }
}
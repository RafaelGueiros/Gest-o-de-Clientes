<%@ Page Language="C#" MasterPageFile="Index.Master" AutoEventWireup="true" CodeBehind="NovoCliente.aspx.cs" Inherits="GestaoClientes.NovoCliente" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<!DOCTYPE html>

<html>
<head>
    <link href="~/Content/custom/js/alertify.js"  rel="stylesheet" />
    <link href="~/Content/style.css"  rel="stylesheet" />
    <link href="~/Content/print.min.css"  rel="stylesheet" />
    <link href="~/Content/custom/css/Intranet_v2.css" rel="stylesheet" />
    <link href="~/Content/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="~/Content/libs/datatables/css/datatables.min.css" rel="stylesheet" />
    <link href="~/Content/libs/jquery-ui/jquery-ui.min.css" rel="stylesheet" />
    <link href="~/Content/libs/jquery-ui/jquery-ui.structure.min.css" rel="stylesheet" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>
    <script src="http://malsup.github.com/jquery.form.js"></script>
    <title></title>
</head>
<body>
    <div class="col-md-3">
        <span style="color:gray; font-family:Calibri; font-size:12px;">Gestão de Clientes ></span>
        <span style="color:#e97700; font-family:Calibri; font-size:12px; font-weight:bold">Registro de Clientes</span>
    </div>
    <div class="col-md-6">
        <center>
            <asp:Button ID="btnNovo" runat="server" Text="Novo"  Height="34px" Width="184px" class="btn btn-warning" OnClick="btnNovo_Click" />
            <asp:Button ID="btnLista" runat="server" Text="Lista Clientes"  Height="34px" Width="184px" class="btn btn-warning" OnClick="btnLista_Click" />
        </center>
    </div>
    <div class="col-md-12"><br /></div>
    <input type="text" id="url" value="@(uri.AbsolutePath)" class="hidden" />
    <input type="text" id="acessotipo" value="<%=Session["tipo"].ToString() %>" class="hidden" />
    <input type="text" id="acessorelatorio" value="<%=Session["acessoRel"].ToString() %>" class="hidden" />
    <input type="text" value="<%=Session["matricula"].ToString() %>" class="hidden" id="txtAnalista" size="20" maxlength="1000" readonly>

    <div class="col-md-12" id="Div12">
        <div id="divArquivos" class="" style="min-height:680px; width:100%; border:solid; border-width:1px; border-color:#F5F5F5">
            <div style="background-color: #0061A1; height:65px;">
                <br /><center><span style="color:white; font-size:20px; font-weight:bold; font-family:Calibri">NOVO CLIENTE <label id="NomeOperacao"></label></span></center>
            </div><br />
        
            <div class="col-md-12">
                <div class="col-md-12" id="div1">
                    <div class="col-md-12">
                        <div class="col-sm-3">
                            <label for="Nome">Nome cliente:</label><br />
                            <asp:TextBox ID="txtNome" runat="server" class="form-control"></asp:TextBox>
                        </div>
                        <div class="col-sm-3" id="divCPF">
                            <label for="CPF">CPF:</label><br />
                            <asp:TextBox ID="txtCPF" runat="server" class="form-control"></asp:TextBox>
                        </div>
                        <div class="col-sm-3 ">
                            <label for="tipoCliente">Tipo:</label><br />
                            <asp:DropDownList ID="cboTipoCli" runat="server" class="form-control">
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="col-md-12" id="divEspaco"><br /></div>
                </div>

                <div class="col-md-12" id="div1">
                    <div class="col-md-12">
                        <div class="col-sm-3">
                            <label for="sexo">Sexo:</label><br />
                            <asp:DropDownList ID="cboSexo" runat="server" class="form-control">
                                <asp:ListItem Text="Selecione" Value="0"></asp:ListItem>
                                <asp:ListItem Text="Feminino" Value="1"></asp:ListItem>
                                <asp:ListItem Text="Masculino" Value="2"></asp:ListItem>
                            </asp:DropDownList>
                        </div>
                        <div class="col-sm-3">
                            <label for="SituacaoCli">Situacao:</label><br />
                            <asp:DropDownList ID="cboSituacaoCli" runat="server" class="form-control">
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="col-md-12" id="divEspaco"><br /></div>
                    <div class="col-md-12" id="divEspaco"><br /></div>
                    <div class="col-md-12" id="divEspaco"><br /></div>
                </div>

                <div class="col-md-12" id="div1">
                    <div class="col-md-12">
                        <div class="col-sm-3">
                            <center><asp:Button ID="btnSalvar" runat="server" Text="Salvar" Height="34px" Width="184px" class="btn btn-success btn-block" OnClick="btnSalvar_Click" /></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
</asp:Content>

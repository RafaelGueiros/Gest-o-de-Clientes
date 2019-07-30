<%@ Page Language="C#" MasterPageFile="Index.Master" AutoEventWireup="true" CodeBehind="Clientes.aspx.cs" Inherits="GestaoClientes.Clientes" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<!DOCTYPE html>

<html>
<head>
    <link href="~/Content/custom/js/alertify.js"  rel="stylesheet" />
    <link href="~/Content//style.css"  rel="stylesheet" />
    <link href="~/Content/print.min.css"  rel="stylesheet" />
    <link href="~/Content/custom/css/Intranet_v2.css" rel="stylesheet" />
    <link href="~/Content/bootstrap.css" rel="stylesheet" />
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
            <asp:Button ID="btnNovo" runat="server" Text="Novo"  Height="34px" Width="184px" class="btn btn-warning" OnClick="btnNovo_Click"/>
            <asp:Button ID="btnLista" runat="server" Text="Lista Clientes"  Height="34px" Width="184px" class="btn btn-warning" />
        </center>
    </div>
    <div class="col-md-12"><br /></div>
    <input type="text" id="url" value="@(uri.AbsolutePath)" class="hidden" />
    <input type="text" id="acessotipo" value="<%=Session["tipo"].ToString() %>" class="hidden" />
    <input type="text" id="acessorelatorio" value="<%=Session["acessoRel"].ToString() %>" class="hidden" />
    <input type="text" value="<%=Session["matricula"].ToString() %>" class="hidden" id="txtAnalista" size="20" maxlength="1000" readonly>

    <div class="col-md-12">
        <div id="divRelatorios" style="height:750px;width:100%; border:solid; border-width:1px; border-color:#F5F5F5">
            <div style="background-color: #0061A1; height:65px;">
                <br /><center><span style="color:white; font-size:20px; font-weight:bold; font-family:Calibri">LISTA DE CLIENTES</span></center>
            </div><br />

            <div class="col-md-12" style="margin-left:50%">
                <div class="col-md-12" id="divFiltros">
                    <label>Nome Cliente:</label>
                    <input type="text" class="" id="txtNomeBusca" size="20" maxlength="1000">
                    <label>CPF Cliente:</label>
                    <input type="text" class="" id="txtCPFBusca" size="20" maxlength="1000">
                    <asp:Button ID="btnBuscar" runat="server" Text="Buscar" Width="80px" class="btn btn-success" />
                </div>
                <div class="col-md-12" id="divEspaco"><br /></div>
            </div>



            <div class="col-md-12">
                <div style="overflow:scroll; height: 600px">
                    <asp:GridView ID="gdvClientes" CssClass="table table-striped table-hover table-bordered small" onrowcommand="gdvClientes_RowCommand" onrowdeleting="gdvClientes_RowDeleting" 
                           onrowupdating="gdvClientes_RowUpdating" runat="server" AutoGenerateColumns="false" Width="100%">
                        <Columns>
                           <asp:TemplateField HeaderText="Nome" ItemStyle-Width="18%">
                               <ItemTemplate>
                                   <asp:Label ID="lblNome" runat="server" Text='<%# Eval("NOME") %>'></asp:Label>
                               </ItemTemplate>

        <ItemStyle Width="18%"></ItemStyle>
                           </asp:TemplateField>
                           <asp:TemplateField HeaderText="CPF" ItemStyle-Width="18%">
                               <ItemTemplate>
                                   <asp:Label ID="lblCPF" runat="server" Text='<%# Eval("CPF") %>'></asp:Label>
                               </ItemTemplate>

        <ItemStyle Width="19%"></ItemStyle>
                           </asp:TemplateField>
                           <asp:TemplateField HeaderText="Tipo Cliente" ItemStyle-Width="19%">
                               <ItemTemplate>
                                   <asp:Label ID="lblTipoCliente" runat="server" Text='<%# Eval("TIPOCLIENTE") %>'></asp:Label>
                               </ItemTemplate>

        <ItemStyle Width="19%"></ItemStyle>
                           </asp:TemplateField>
                              <asp:TemplateField HeaderText="Sexo" ItemStyle-Width="19%">
                               <ItemTemplate>
                                   <asp:Label ID="lblSexo" runat="server" Text='<%# Eval("SEXO") %>'></asp:Label>
                               </ItemTemplate>

        <ItemStyle Width="19%"></ItemStyle>
                           </asp:TemplateField>
                                 <asp:TemplateField HeaderText="Situacao Cliente" ItemStyle-Width="19%">
                               <ItemTemplate>
                                   <asp:Label ID="lblSituacaoCliente" runat="server" Text='<%# Eval("SITUACAOCLIENTE") %>'></asp:Label>
                               </ItemTemplate>

        <ItemStyle Width="2%"></ItemStyle>
                           </asp:TemplateField>
                            <asp:ButtonField ButtonType="Button" CommandName="Atualizar" ControlStyle-CssClass="btn btn-sm-custom btn-info glyphicon glyphicon glyphicon-new-window" />
                            <asp:ButtonField ButtonType="Button" CommandName="Excluir" ControlStyle-CssClass="btn btn-sm-custom btn-info glyphicon glyphicon glyphicon-new-window" />
                       </Columns>
                   </asp:GridView>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
</asp:Content>
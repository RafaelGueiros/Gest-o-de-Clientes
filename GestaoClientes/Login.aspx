<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="GestaoClientes.Login" %>

<link href="Content/olx.css" rel="stylesheet" type="text/css" media="all"-->


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Gestão de Clientes</title>
    <style type="text/css">
        .auto-style1 {
            height: 30px;
        }
        </style>
</head>

<body bgcolor="#0061a1">
<center>

<form runat=server>
<table cellspacing="0" cellpadding="0" border="0"  bgcolor="#0061a1" width="100%" height="99%"> 
	<tr align="center" bottom="middle">
    	<td> 
			<table cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" style="border-radius:20px"> 
				<tr>
                	<td width="50" height="100"></td>
                	<td width="300"><center></center></td>
                	<td width="50"></td>
                </tr>
				<tr>
                	<td height="30"></td>
                	<td class="lab01"></td>
                	<td></td>
                </tr>
				<tr>
                	<td height="30"></td>
                	<td class="lab01">
                     <div class="lab01"><asp:TextBox ID="txtLogin" runat="server" Height="40px" Width="300px" style="text-align: center" CssClass="inputPesquisa"></asp:TextBox></div>
                	</td>
                	<td></td>
                </tr>
				<tr>
                	<td height="20"></td>
                	<td rowspan="2">
                     &nbsp;</td>
                	<td></td>
                </tr>
				<tr>
                	<td class="auto-style1"></td>
                	<td class="auto-style1"></td>
                </tr>
				<tr>
                	<td height="30"></td>
                	<td class="lab01">
                     <asp:TextBox ID="txtSenha" runat="server" Height="40px" Width="300px" CssClass="inputPesquisa1" style="text-align: center" TextMode="Password"></asp:TextBox>
                	</td>
                	<td></td>
                </tr>
				<tr>
                	<td height="20"></td>
                	<td></td>
                	<td></td>
                </tr>
				<tr>
                	<td height="30"></td>
                	<td class="lab02"><center><a href="http://intranet.unitono.com.br/site/Login/ResetSenha" target="_blank">Esqueceu a senha?</a></center></td>
                	<td></td>
                </tr>
				<tr>
                	<td height="30"></td>
                	<td class="lab01">
                     <asp:Button ID="btnLogin" runat="server" Text="Login" Height="35px" Width="300px" Font-Size="18px" BackColor="#336699" OnClick="btnLogin_Click" ForeColor="White"/>
                	</td>
                	<td></td>
                </tr>
				<tr>
                	<td height="20"></td>
                	<td></td>
                	<td></td>
                </tr>
				<tr>
                	<td height="20"></td>
                	<td><center><img src="Content/img/unitono.jpg" width="150" height="43"  alt=""/></center></td>
                	<td></td>
                </tr>
				<tr>
                	<td height="20"></td>
                	<td></td>
                	<td></td>
                </tr>
			</table>
		</td>
	</tr>
</table>
</form>
</center>

</body>
</html>

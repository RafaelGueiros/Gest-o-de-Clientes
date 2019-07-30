using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using GestaoClientes_DAL.MetodosComuns;
using GestaoClientes_DTO.POCOs;

namespace GestaoClientes_DAL
{
    public class Login_DAO
    {
        public static Usuario EfetuaLogin(string usuario, string senha)
        {
            string strSQL;
            strSQL =    "SELECT *                           " +
                        "FROM [DB_USER].[dbo].[login]       " +
                        "WHERE LOGIN = '" + usuario + "'    " +
                        "AND SENHA = '" + senha + "'        " +
                        "AND STATUS = 1                     ";
            DataTable tab = Metodos.ExecSQLLogin(strSQL);

            Usuario usu = new Usuario();

            if (tab.Rows.Count > 0)
            {
                usu.Login = Convert.ToInt32(tab.Rows[0]["LOGIN"]);
                usu.Nome = tab.Rows[0]["NOME"].ToString();
                usu.Perfil = Convert.ToInt32(tab.Rows[0]["IDACESSO"]);
                usu.IdCentroCusto = Convert.ToInt32(tab.Rows[0]["IDCENTROCUSTO"]);
            }

            return usu;
        }
    }
}
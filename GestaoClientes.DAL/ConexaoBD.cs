using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace GestaoClientes_DAL
{
    public class ConexaoBD
    {
        public static SqlConnection GetConexao()
        {
            string strCon = "Data Source=172.200.0.122;Initial Catalog=DESENVOLVIMENTO;user id=Unitono;password=Unitono3@";
            SqlConnection conexao = new SqlConnection(strCon);
            conexao.Open();

            return conexao;
        }

        public static SqlConnection GetConexaoLogin()
        {
            string strCon = "Data Source=10.1.12.9;Initial Catalog=DB_USER;user id=planejamento;password=Plan2014";
            SqlConnection conexao = new SqlConnection(strCon);
            conexao.Open();

            return conexao;
        }
    }
}
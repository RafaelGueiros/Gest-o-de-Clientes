using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace GestaoClientes_DAL.MetodosComuns
{
    public class Metodos
    {
        public static DataTable ExecSQL(string sql)
        {
            using (SqlConnection conexao = ConexaoBD.GetConexao())
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter(sql, conexao))
                {
                    DataTable tabelaTemp = new DataTable();
                    adapter.Fill(tabelaTemp);
                    conexao.Close();

                    return tabelaTemp;
                }
            }
        }

        public static DataTable ExecSQLLogin(string sql)
        {
            using (SqlConnection conexao = ConexaoBD.GetConexaoLogin())
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter(sql, conexao))
                {
                    DataTable tabelaTemp = new DataTable();
                    adapter.Fill(tabelaTemp);
                    conexao.Close();

                    return tabelaTemp;
                }
            }
        }

        public static void ExecInsert(string sql, SqlParameter[] parameters)
        {
            using (SqlConnection conexao = ConexaoBD.GetConexao())
            {
                using (SqlCommand sqlCommand = new SqlCommand(sql, conexao))
                {


                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.Parameters.AddRange(parameters);
                    sqlCommand.ExecuteNonQuery();
                }
            }
        }
    }
}
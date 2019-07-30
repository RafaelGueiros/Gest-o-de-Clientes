using GestaoClientes_DAL.MetodosComuns;
using GestaoClientes_DTO.POCOs;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace GestaoClientes_DAL
{
    public class Cliente_DAO
    {
        public static DataTable ListaClientes(string nome = "", long cpf = 0)
        {
            string strSQL;
            strSQL = "EXEC ListaClientes '" + nome + "', " + cpf;

            DataTable tab = Metodos.ExecSQL(strSQL);

            return tab;
        }

        public static bool SalvarCliente(Cliente cliente)
        {
            SqlParameter[] parameters =
            {
                new SqlParameter("@nome",cliente.Nome),
                new SqlParameter("@cpf",cliente.Cpf),
                new SqlParameter("@id_TipoCliente",Convert.ToInt32(cliente.TipoCliente)),
                new SqlParameter("@sexo",cliente.Sexo),
                new SqlParameter("@id_SituacaoCliente",Convert.ToInt32(cliente.SituacaoCliente))
            };
            string strSQL;
            strSQL = "CLIENTE_INSERIR";
            Metodos.ExecInsert(strSQL, parameters);

            return true;
        }

        public static bool AlterarCliente(Cliente cliente)
        {
            SqlParameter[] parameters =
            {
                new SqlParameter("@nome",cliente.Nome),
                new SqlParameter("@cpf",cliente.Cpf),
                new SqlParameter("@id_TipoCliente",Convert.ToInt32(cliente.TipoCliente)),
                new SqlParameter("@sexo",cliente.Sexo),
                new SqlParameter("@id_SituacaoCliente",Convert.ToInt32(cliente.SituacaoCliente))
            };
            string strSQL;
            strSQL = "CLIENTE_ALTERAR";
            Metodos.ExecInsert(strSQL, parameters);

            return true;
        }

        public static DataTable ListaTipoCliente()
        {
            string strSQL;
            strSQL = "EXEC ListaTipoCliente";

            DataTable tab = Metodos.ExecSQL(strSQL);

            return tab;
        }

        public static DataTable ListaSituacaoCliente()
        {
            string strSQL;
            strSQL = "EXEC ListaSituacaoCliente";

            DataTable tab = Metodos.ExecSQL(strSQL);

            return tab;
        }

        public static bool VerificaClienteCadastrado(long cpf)
        {
            string strSQL;
            strSQL = "EXEC VerificaClienteCadastrado " + cpf;

            DataTable tab = Metodos.ExecSQL(strSQL);

            if (tab.Rows.Count == 0)
                return false;
            else
                return true;
        }
    }
}
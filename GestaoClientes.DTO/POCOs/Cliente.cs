using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GestaoClientes_DTO.POCOs
{
    public class Cliente
    {
        private string nome, tipoCliente, sexo, situacaoCliente;
        private long cpf;

        public string Nome { get => nome; set => nome = value; }
        public string TipoCliente { get => tipoCliente; set => tipoCliente = value; }
        public string Sexo { get => sexo; set => sexo = value; }
        public string SituacaoCliente { get => situacaoCliente; set => situacaoCliente = value; }
        public long Cpf { get => cpf; set => cpf = value; }
    }
}
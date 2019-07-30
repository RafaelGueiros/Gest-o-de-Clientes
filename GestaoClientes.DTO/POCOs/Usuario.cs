using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GestaoClientes_DTO.POCOs
{
    public class Usuario
    {
        private string nome;
        private int login, idCentroCusto, perfil;

        public int Login { get => login; set => login = value; }
        public string Nome { get => nome; set => nome = value; }
        public int IdCentroCusto { get => idCentroCusto; set => idCentroCusto = value; }
        public int Perfil { get => perfil; set => perfil = value; }
    }
}
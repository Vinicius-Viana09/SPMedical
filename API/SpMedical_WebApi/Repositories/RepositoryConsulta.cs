using SpMedical_WebAPI.Domains;
using SpMedical_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Repositories
{
    public class RepositoryConsulta : IConsulta
    {
        public void Atualizar(int IdConsulta, Consultum consultaAtualizada)
        {
            throw new NotImplementedException();
        }

        public Consultum BuscarPorId(int IdConsulta)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Consultum novaConsulta)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int IdConsulta)
        {
            throw new NotImplementedException();
        }

        public List<Consultum> Listar()
        {
            throw new NotImplementedException();
        }
    }
}

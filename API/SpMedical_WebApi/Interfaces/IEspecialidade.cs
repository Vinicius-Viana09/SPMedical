using SpMedical_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Interfaces
{
    interface IEspecialidade
    {
        List<Especialidade> Listar();

        Especialidade BuscarPorId(int idEspecialidade);

        void Cadastrar(Especialidade novaEspecialidade);

        void Atualizar(int idEspecialidade, Especialidade especialidadeAtualizada);

        void Deletar(int idEspecialidade);
    }
}

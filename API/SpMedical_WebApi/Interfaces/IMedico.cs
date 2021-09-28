using SpMedical_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Interfaces
{
    interface IMedico
    {
        List<Medico> Listar();

        Medico BuscarPorId(int idMedico);

        void Cadastrar(Medico novoMedico);

        void Atualizar(int idMedico, Medico medicoAtualizado);

        void Deletar(int idMedico);
    }
}

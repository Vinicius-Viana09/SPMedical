using SpMedical_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Interfaces
{
    interface IPaciente
    {
        List<Paciente> Listar();

        Paciente BuscarPorId(int idPaciente);

        void Cadastrar(Paciente novoPaciente);

        void Atualizar(int idPaciente, Paciente pacienteAtualizado);

        void Deletar(int idPaciente);

    }
}

using SpMedical_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Interfaces
{
    interface IClinica
    {
        Clinica BuscarPorId(int IdClinica);

        void Cadastrar(Clinica novaClinica);

        void Atualizar(int IdClinica, Clinica clinicaAtualizada);

        void Deletar(int IdClinica);
    }
}

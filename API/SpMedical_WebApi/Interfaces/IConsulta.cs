using SpMedical_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Interfaces
{
    interface IConsulta
    {
        List<Consultum> Listar();

        Consultum BuscarPorId(int IdConsulta);

        void Cadastrar(Consultum novaConsulta);

        void Atualizar(int IdConsulta, Consultum consultaAtualizada, bool solicitaMedico);

        void Deletar(int IdConsulta);

        List<Consultum> ListarMinhas(int IdConsulta);
    }
}

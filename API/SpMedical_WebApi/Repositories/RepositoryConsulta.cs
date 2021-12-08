using Microsoft.EntityFrameworkCore;
using SpMedical_WebAPI.Contexts;
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
        SpMedicalContext ctx = new SpMedicalContext();

        public void Atualizar(int IdConsulta, Consultum consultaAtualizada, bool solicitaMedico)
        {
            Consultum consultaBuscada = BuscarPorId(IdConsulta);

            if (solicitaMedico)
            {
                if (consultaAtualizada.Descricao != null)
                {
                    consultaBuscada.Descricao = consultaAtualizada.Descricao;
                }
            }
            else
            {
                if (consultaAtualizada.IdSituacaoConsulta != null)
                {
                    consultaBuscada.IdSituacaoConsulta = consultaAtualizada.IdSituacaoConsulta;
                }
            }

            ctx.Consulta.Update(consultaBuscada);

            ctx.SaveChanges();
        }

        public Consultum BuscarPorId(int IdConsulta)
        {
            return ctx.Consulta.FirstOrDefault(e => e.IdConsulta == IdConsulta);
        }

        public void Cadastrar(Consultum novaConsulta)
        {
            ctx.Consulta.Add(novaConsulta);

            ctx.SaveChanges();
        }

        public void Deletar(int IdConsulta)
        {
            Consultum consultaBuscada = BuscarPorId(IdConsulta);

            ctx.Consulta.Remove(consultaBuscada);

            ctx.SaveChanges();
        }

        public List<Consultum> Listar()
        {
            return ctx.Consulta.ToList();
        }

        public List<Consultum> ListarMinhas(int IdConsulta)
        {
            return ctx.Consulta
                .Include(c => c.IdPacienteNavigation.IdUsuarioNavigation)
                .Include(c => c.IdMedicoNavigation.IdUsuarioNavigation)
                .Include(c => c.IdSituacaoConsultaNavigation)
                .Where( c => c.IdMedicoNavigation.IdUsuario == IdConsulta || c.IdPacienteNavigation.IdUsuario == IdConsulta )
                .ToList();
        }
    }
}

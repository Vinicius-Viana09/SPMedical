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

        public void Atualizar(int IdConsulta, Consultum consultaAtualizada)
        {
            Consultum consultaBuscada = BuscarPorId(IdConsulta);

            if (consultaAtualizada.IdSituacaoConsulta != null)
            {
                consultaBuscada.IdSituacaoConsulta = consultaAtualizada.IdSituacaoConsulta;
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
                .Include(c => c.DataConsulta)
                .Include("IdSituacaoConsultaNavigation")
                //.Include(p => p.IdPacienteNavigation.IdInstituicaoNavigation)
                //.Where(p => p.IdPaciente == idPaciente)
                .ToList();
        }
    }
}

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
    public class RepositoryMedico : IMedico
    {
        SpMedicalContext ctx = new SpMedicalContext();

        public void Atualizar(int idMedico, Medico medicoAtualizado)
        {
            Medico medicoBuscado = BuscarPorId(idMedico);

            if (medicoAtualizado.IdEspecialidade != null)
            {
                medicoBuscado.IdEspecialidade = medicoAtualizado.IdEspecialidade;
            }

            ctx.Medicos.Update(medicoBuscado);

            ctx.SaveChanges();
        }

        public Medico BuscarPorId(int idMedico)
        {
            return ctx.Medicos.FirstOrDefault(e => e.IdMedico == idMedico);
        }

        public void Cadastrar(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);

            ctx.SaveChanges();
        }

        public void Deletar(int idMedico)
        {
            Medico medicoBuscado = BuscarPorId(idMedico);

            ctx.Medicos.Remove(medicoBuscado);

            ctx.SaveChanges();
        }

        public List<Medico> Listar()
        {
            return ctx.Medicos.ToList();
        }
    }
}

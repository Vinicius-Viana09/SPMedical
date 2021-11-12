using SpMedical_WebAPI.Contexts;
using SpMedical_WebAPI.Domains;
using SpMedical_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Repositories
{
    public class RepositoryClinica : IClinica
    {
        SpMedicalContext ctx = new SpMedicalContext();

        public void Atualizar(int IdClinica, Clinica clinicaAtualizada)
        {
            Clinica clinicaBuscada = BuscarPorId(IdClinica);

            if (clinicaAtualizada.EndClinica != null)
            {
                clinicaBuscada.EndClinica = clinicaAtualizada.EndClinica;
            }

            ctx.Clinicas.Update(clinicaBuscada);

            ctx.SaveChanges();
        }

        public Clinica BuscarPorId(int IdClinica)
        {
            return ctx.Clinicas.FirstOrDefault(e => e.IdClinica == IdClinica);
        }

        public void Cadastrar(Clinica novaClinica)
        {
            ctx.Clinicas.Add(novaClinica);

            ctx.SaveChanges();
        }

        public void Deletar(int IdClinica)
        {
            Clinica clinicaBuscada = BuscarPorId(IdClinica);

            ctx.Clinicas.Remove(clinicaBuscada);

            ctx.SaveChanges();
        }
    }
}

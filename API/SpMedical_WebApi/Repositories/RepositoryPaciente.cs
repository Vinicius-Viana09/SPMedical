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
    public class RepositoryPaciente : IPaciente
    {
        SpMedicalContext ctx = new SpMedicalContext();

        public void Atualizar(int idPaciente, Paciente pacienteAtualizado)
        {
            Paciente pacienteBuscado = BuscarPorId(idPaciente);

            if (pacienteAtualizado.TelefonePaciente != null)
            {
                pacienteBuscado.TelefonePaciente = pacienteAtualizado.TelefonePaciente;
            }

            ctx.Pacientes.Update(pacienteBuscado);

            ctx.SaveChanges();
        }

        public Paciente BuscarPorId(int idPaciente)
        {
            return ctx.Pacientes.FirstOrDefault(e => e.IdPaciente == idPaciente);
        }

        public void Cadastrar(Paciente novoPaciente)
        {
            ctx.Pacientes.Add(novoPaciente);

            ctx.SaveChanges();
        }

        public void Deletar(int idPaciente)
        {
            Paciente pacienteBuscado = BuscarPorId(idPaciente);

            ctx.Pacientes.Remove(pacienteBuscado);

            ctx.SaveChanges();
        }

        public List<Paciente> Listar()
        {
            return ctx.Pacientes.ToList();
        }

    }
}

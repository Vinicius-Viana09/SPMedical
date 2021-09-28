using SpMedical_WebAPI.Contexts;
using SpMedical_WebAPI.Domains;
using SpMedical_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Repositories
{
    public class RepositoryEspecialidades : IEspecialidade
    {
        SpMedicalContext ctx = new SpMedicalContext();

        public void Atualizar(int idEspecialidade, Especialidade especialidadeAtualizada)
        {
            Especialidade especialidadeBuscada = BuscarPorId(idEspecialidade);

            if (especialidadeAtualizada.NomeEspecialidade != null)
            {
                especialidadeBuscada.NomeEspecialidade = especialidadeAtualizada.NomeEspecialidade;
            }

            ctx.Especialidades.Update(especialidadeBuscada);

            ctx.SaveChanges();
        }

        public Especialidade BuscarPorId(int idEspecialidade)
        {
            return ctx.Especialidades.FirstOrDefault(e => e.IdEspecialidade == idEspecialidade);
        }

        public void Cadastrar(Especialidade novaEspecialidade)
        {
            ctx.Especialidades.Add(novaEspecialidade);

            ctx.SaveChanges();
        }

        public void Deletar(int idEspecialidade)
        {
            Especialidade especialidadeBuscada = BuscarPorId(idEspecialidade);

            ctx.Especialidades.Remove(especialidadeBuscada);

            ctx.SaveChanges();
        }

        public List<Especialidade> Listar()
        {
            return ctx.Especialidades.ToList();
        }
    }
}

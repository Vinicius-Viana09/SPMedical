using System;
using System.Collections.Generic;

#nullable disable

namespace SpMedical_WebAPI.Domains
{
    public partial class Medico
    {
        public Medico()
        {
            Consulta = new HashSet<Consultum>();
        }

        public byte IdMedico { get; set; }
        public int? IdUsuario { get; set; }
        public byte? IdClinica { get; set; }
        public byte? IdEspecialidade { get; set; }
        public string CnpjMedico { get; set; }
        public string RazaoSocial { get; set; }
        public string EndClinica { get; set; }

        public virtual Clinica IdClinicaNavigation { get; set; }
        public virtual Especialidade IdEspecialidadeNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Consultum> Consulta { get; set; }
    }
}

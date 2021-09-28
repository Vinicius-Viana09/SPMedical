using System;
using System.Collections.Generic;

#nullable disable

namespace SpMedical_WebAPI.Domains
{
    public partial class Paciente
    {
        public Paciente()
        {
            Consulta = new HashSet<Consultum>();
        }

        public byte IdPaciente { get; set; }
        public int? IdUsuario { get; set; }
        public string DataNascimento { get; set; }
        public string TelefonePaciente { get; set; }
        public string RgPaciente { get; set; }
        public string CpfPaciente { get; set; }
        public string EndPaciente { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Consultum> Consulta { get; set; }
    }
}

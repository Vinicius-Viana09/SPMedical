using System;
using System.Collections.Generic;

#nullable disable

namespace SpMedical_WebAPI.Domains
{
    public partial class Clinica
    {
        public Clinica()
        {
            Medicos = new HashSet<Medico>();
        }

        public byte IdClinica { get; set; }
        public string NomeClinica { get; set; }
        public string EndClinica { get; set; }
        public string HorarioAbertura { get; set; }
        public string HorarioFechamento { get; set; }
        public string RazaoSocial { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}

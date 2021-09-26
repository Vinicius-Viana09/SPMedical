using System;
using System.Collections.Generic;

#nullable disable

namespace SpMedical_WebApi.Domains
{
    public partial class Consultum
    {
        public byte IdConsulta { get; set; }
        public byte? IdMedico { get; set; }
        public byte? IdPaciente { get; set; }
        public string DataConsulta { get; set; }
        public string Situacao { get; set; }

        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
    }
}

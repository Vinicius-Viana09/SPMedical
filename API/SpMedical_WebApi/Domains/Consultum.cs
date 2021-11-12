using System;
using System.Collections.Generic;

#nullable disable

namespace SpMedical_WebAPI.Domains
{
    public partial class Consultum
    {
        public byte IdConsulta { get; set; }
        public byte? IdMedico { get; set; }
        public byte? IdPaciente { get; set; }
        public DateTime DataConsulta { get; set; }
        public string Descricao { get; set; }
        public short? IdSituacaoConsulta { get; set; }

        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual Situacaoconsultum IdSituacaoConsultaNavigation { get; set; }
    }
}

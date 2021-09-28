using System;
using System.Collections.Generic;

#nullable disable

namespace SpMedical_WebAPI.Domains
{
    public partial class Situacaoconsultum
    {
        public Situacaoconsultum()
        {
            Consulta = new HashSet<Consultum>();
        }

        public short IdSituacaoConsulta { get; set; }
        public string NomeSituacao { get; set; }

        public virtual ICollection<Consultum> Consulta { get; set; }
    }
}

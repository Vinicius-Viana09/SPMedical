using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpMedical_WebAPI.Interfaces;
using SpMedical_WebAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace SpMedical_WebAPI.Controller
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ControllerConsulta : ControllerBase
    {
        private IConsulta _consulta { get; set; }

        public ControllerConsulta()
        {
            _consulta = new RepositoryConsulta();
        }

        [HttpGet("minhas")] 
        public IActionResult ListarMinhas()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                return Ok(_consulta.ListarMinhas()
            }
            catch (Exception error)
            {
                return BadRequest(new
                {
                    mensagem = "Não é possivel mostrar as consultas se o usuario não estiver logado",
                    error
                });
            }
        }
    }
}
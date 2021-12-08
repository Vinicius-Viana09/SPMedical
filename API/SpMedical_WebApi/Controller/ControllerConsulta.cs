using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpMedical_WebAPI.Domains;
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

                return Ok(_consulta.ListarMinhas(idUsuario));
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

        [Authorize(Roles = "3")]
        [HttpPost("consultar")]
        public IActionResult Consultar(Consultum novaConsulta)
        {
            try
            {
                _consulta .Cadastrar(novaConsulta);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }      
        }

        [Authorize(Roles = "1")]
        [HttpPut("{id}")]
        public IActionResult Atualizar(int idConsulta, Consultum consultaAtualizada, bool solicitaMedico)
        {
            try
            {
                _consulta.Atualizar(idConsulta, consultaAtualizada, solicitaMedico);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Authorize(Roles = "3")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int idConsulta)
        {
            try
            {
                _consulta.Deletar(idConsulta);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
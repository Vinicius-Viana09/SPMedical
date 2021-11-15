USE SP_MEDICAL;
GO

INSERT INTO CLINICA(nomeClinica,endClinica,horarioAbertura,horarioFechamento,razaoSocial)
VALUES ('Clinica Possarle ', 'Av. Barão Limeira, 532, São Paulo, SP', '05:00', '00:00', 'SP Medical Group')

INSERT INTO ESPECIALIDADE(nomeEspecialidade)
VALUES ('Acupuntura'), ('Anestesiologia'), ('Angiologia'), ('Cardiologia'), ('Cirurgia Cardiovascular'), ('Cirurgia da Mão'), ('Cirurgia do Aparelho Digestivo'), ('Cirurgia Geral'), ('Cirurgia Pediátrica'), ('Cirurgia Plástica'), ('Cirurgia Torácica'), ('Cirurgia Vascular'), ('Dermatologia'), ('Radioterapia'), ('Urologia'), ('Pediatria'), ('Psiquiatria')

INSERT INTO TIPOUSUARIO(nomeTipoUsuario)
VALUES  ('Administrador'), ('Médico'), ('Paciente')

INSERT INTO USUARIO(idTipoUsuario,nomeUsuario,emailUsuario,senhaUsuario)
VALUES (2,'Ricardo Lemos', 'ricardo.lemos@spmedicalgroup.com.br', '12345678'), (2,'Roberto Possarle', 'roberto.possarle@spmedicalgroup.com.br', '12345678'),(2,'Helena Strada', 'helena.souza@spmedicalgroup.com.br', '12345678'), (3,'Ligia', 'ligia@gmail.com', '12345678'), (3,'Alexandre', 'alexandre@gmail.com', '12345678'), (3,'Fernando', 'fernando@gmail.com', '12345678'), (3,'Henrique', 'henrique@gmail.com', '12345678'), (3,'João', 'joao@hotmail.com', '12345678'), (3,'Bruno', 'bruno@gmail.com', '12345678'), (3,'Mariana', 'mariana@outlook.com', '12345678'),(1, 'adm', 'adm@gmail.com', 'adm123')

INSERT INTO PACIENTE(idUsuario,dataNascimento,telefonePaciente,rgPaciente,cpfPaciente,endPaciente)
VALUES (4, '10/13/1983', '11 3456-7654', '43522543-5', '94839859000', 'Rua Estado de Israel 240, São Paulo, Estado de São Paulo, 04022-000'), (5, '7/23/2001', '11 98765-6543', '32654345-7', '73556944057', 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200'), (6, '10/10/1978', '11 97208-4453', '54636525-3', '16839338002', 'Av. Ibirapuera - Indianópolis, 2927, São Paulo - SP, 04029-200'), (7, '10/13/1985', '11 3456-6543', '54366362-5', '14332654765', 'R. Vitória, 120 - Vila Sao Jorge, Barueri - SP, 06402-030'), (8, '8/27/1975', '11 7656-6377', '53254444-1', '91305348010', 'R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeirão Pires - SP, 09405-380'), (9, '3/21/1972', '11 95436-8769', '54566266-7', '79799299004', 'Alameda dos Arapanés, 945 - Indianópolis, São Paulo - SP, 04524-001'), (10, '03/05/2018', '', '54566266-8', '13771913039', 'R Sao Antonio, 232 - Vila Universal, Barueri - SP, 06407-140')

INSERT INTO MEDICO(idUsuario,idEspecialidade,idClinica,cnpjMedico,razaoSocial, endClinica)
VALUES (1,2,1, '86.400.902/0001-30', 'SP Medical Group', 'Av. Barão Limeira, 532, São Paulo, SP'), (2,17,1, '86.400.902/0001-30', 'SP Medical Group', 'Av. Barão Limeira, 532, São Paulo, SP'), (3,16,1, '86.400.902/0001-30', 'SP Medical Group', 'Av. Barão Limeira, 532, São Paulo, SP')

INSERT INTO SITUACAOCONSULTA(nomeSituacao)
VALUES ('Realizada'), ('Cancelada'), ('Agendada')

INSERT INTO CONSULTA(idMedico,idPaciente,descricao,dataConsulta,idSituacaoConsulta)
VALUES (3,7,null,'20/01/2020 15:00',1), (1,2,null, '06/01/2020 10:00',2), (1,3,'', '07/02/2020 11:00',1), (1,2,'', '06/02/2018 10:00',1), (2,4,'', '07/02/2019 11:00',2), (3,7,'', '08/03/2020 15:00',3), (2,4,'', '09/03/2020 11:00',3)

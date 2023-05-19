import Departamento from "./empresa/departamento"
import empresa from "./empresa/empresa.service"

function inicializarEmpresa() {
  var Departamento1 = new Departamento()
  Departamento1.addColaborador("Renan", true)
  Departamento1.addColaborador("Felipe", false)
  Departamento1.addColaborador("Matheus", false)
  Departamento1.addColaborador("Eduardo", false)
  Departamento1.addColaborador("Pedro", false)

  var Departamento2 = new Departamento()
  Departamento2.addColaborador("Thiago", true)
  Departamento2.addColaborador("Vinicius", false)
  Departamento2.addColaborador("João", false)
  Departamento2.addColaborador("Antonio", false)
  Departamento2.addColaborador("Lucas", false)

  var Departamento3 = new Departamento()
  Departamento3.addColaborador("Rodrigo", true)
  Departamento3.addColaborador("Fernando", false)
  Departamento3.addColaborador("David", false)
  Departamento3.addColaborador("Mikael", false)
  Departamento3.addColaborador("Alan", false)

  var Departamento4 = new Departamento()
  Departamento4.addColaborador("Guilherme", true)
  Departamento4.addColaborador("Natan", false)
  Departamento4.addColaborador("Erick", false)
  Departamento4.addColaborador("Enzo", false)
  Departamento4.addColaborador("Ronaldo", false)

  var Departamento5 = new Departamento()
  Departamento5.addColaborador("Cristiano", true)
  Departamento5.addColaborador("Carlos", false)
  Departamento5.addColaborador("Otavio", false)
  Departamento5.addColaborador("Bernardo", false)
  Departamento5.addColaborador("Leandro", false)

  var Empresa = new empresa()
  Empresa.setDepartamentos(Departamento1)
  Empresa.setDepartamentos(Departamento2)
  Empresa.setDepartamentos(Departamento3)
  Empresa.setDepartamentos(Departamento4)
  Empresa.setDepartamentos(Departamento5)
  return Empresa
}

function main() {
  var Empresa = inicializarEmpresa()
  var Departamento1 = new Departamento()
  Departamento1.addColaborador("Eduardo", true)
  Departamento1.addColaborador("Cleber", false)
  Departamento1.addColaborador("Jorge", false)
  Departamento1.addColaborador("Maria", false)
  Departamento1.addColaborador("Vanessa", false)

  Empresa.getDepartamentos()

  const Resposta = Empresa.getEquipe({nome: 'Eduardo', gerente: true})

  console.log(Resposta)
}

main();
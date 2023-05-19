import {Colaborador, Equipe} from "./colaboradores"
import Departamento from "./departamento"

class Empresa{
    private Departamentos: Departamento[] = new Array()

    public getDepartamentos(){
        return this.Departamentos
    }

    public setDepartamentos(nomeDepartamento: Departamento){
        this.Departamentos.push(nomeDepartamento)
        return
    }

    public getEquipe(Colaborador: Colaborador){
      const obj: Equipe = {
          nomeGerente: Colaborador.nome,
          equipeColaboradores: []
      };
      return obj;
  };
  }

export default Empresa; 
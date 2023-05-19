import { Colaborador, Equipe } from './colaboradores';

class Departamento {
  private equipe: Equipe = { nomeGerente: '', equipeColaboradores: [] };

  public getEquipe(): Equipe {
    return this.equipe;
  }

  public setEquipe(gerente: Colaborador, colaboradores: Colaborador[]): void {
    this.equipe.nomeGerente = gerente.nome;
    this.equipe.equipeColaboradores = colaboradores;
  }

  public addColaborador(nome: string, gerente: boolean): boolean {
    if (this.equipe.equipeColaboradores.length >= 5) {
      return false;
    }

    const colaborador: Colaborador = { nome: nome, gerente: gerente };
    this.equipe.equipeColaboradores.push(colaborador);
    return true;
  }

  public getSubordinados(): Colaborador[] {
    return this.equipe.equipeColaboradores.filter(colaborador => !colaborador.gerente);
  }

  public setGerente(nomeGerente: string): void {
    this.equipe.nomeGerente = nomeGerente;
  }

  public getGerente(): string {
    return this.equipe.nomeGerente;
  }
}

export default Departamento;

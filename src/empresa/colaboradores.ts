export interface Colaborador {
  nome: string;
  gerente: boolean;
}

export interface Equipe {
  nomeGerente: string,
  equipeColaboradores: Colaborador[]
}
export interface IYG {
  partNumber: string;
  linha: string;
  nomeProgramaCorte: string;
  anguloVidea: string;
  maquina: string;
  dataRevisao: string;

  velocidadeSalto: string;
  velocidadeProcessamento: string;
  intensidade: string;
  frequencia: string;
  temperaturaLavadora: string;

  superficie: string;
  metal: string;
  raio: string;
  tipo: string;
  gravacao: string;

  tempoEnvio1: string;
  tempoEnvio2: string;
  atrasoEntradaBraco: string;
  retardoVentosa: string;
  atrasoSaidaBracoDianteira: string;
  atrasoSaidaBracoTraseira: string;
  tempoGiroDianteira: string;
  tempoGiroTraseira: string;
  velocidadeLixEsq: string;
  velocidadeLapDireita: string;
  qtdVoltasFrontal: string;
  qtdVoltasTraseira: string;
  pressaoLixado: string;
  pressaoLapidado: string;

  rvm?: boolean;
  rvmRaio?: string;
  rvmMin?: string;
  rvmMax?: string;
}

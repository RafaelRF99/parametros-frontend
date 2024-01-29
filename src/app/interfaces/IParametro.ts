export interface IParametro {
  partNumber: string;
  linha: string;
  nomeProgramaCorte: string;
  anguloVidea: string;
  maquina: string;
  dataRevisao: string;

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

  atrasarAvanco: string;
  atrasarLeituraEspelho: string;

  p1: [
    {
      position?: string;
      a1: string;
      a2: string;
      a3: string;
      a4: string;
      b1: string;
      b2: string;
      b3: string;
      b4: string;
    }
  ];
  p2: [
    {
      position?: string;
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
    }
  ];
  p3: [
    {
      position?: string;
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
    }
  ];

  rvm: boolean;
  rvmRaio: string;
  rvmMin: string;
  rvmMax: string;
}

export interface INJ {
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
    },
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
    },
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
    },
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
    },
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
}

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IYG } from 'src/app/interfaces/IYG';
import { ParametrosService } from 'src/app/services/parametros.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
})
export class LaunchComponent {
  maquinaSelected = new FormControl('');
  maquinaOptions: string[] = ['YG', 'NJ'];

  parametroYG!: IYG;

  parametroNJ!: {
    p1: [
      {
        atrasarA1: '';
        atrasarA2: '';
        atrasarA3: '';
        atrasarA4: '';
        atrasarB1: '';
        atrasarB2: '';
        atrasarB3: '';
        atrasarB4: '';
      },
      {
        anteciparA1: '';
        anteciparA2: '';
        anteciparA3: '';
        anteciparA4: '';
        anteciparB1: '';
        anteciparB2: '';
        anteciparB3: '';
        anteciparB4: '';
      },
      {
        anguloA1: '';
        anguloA2: '';
        anguloA3: '';
        anguloA4: '';
        anguloB1: '';
        anguloB2: '';
        anguloB3: '';
        anguloB4: '';
      },
      {
        velGiroA1: '';
        velGiroA2: '';
        velGiroA3: '';
        velGiroA4: '';
        velGiroB1: '';
        velGiroB2: '';
        velGiroB3: '';
        velGiroB4: '';
      },
      {
        pressaoA1: '';
        pressaoA2: '';
        pressaoA3: '';
        pressaoA4: '';
        pressaoB1: '';
        pressaoB2: '';
        pressaoB3: '';
        pressaoB4: '';
      }
    ];
    atrasarAvanco: '';
    atrasarLeituraEspelho: '';
  };

  formPartnumber!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private parametroService: ParametrosService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.formPartnumber = this.formBuilder.group({
      partNumber: [null, Validators.required],
      linha: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(2)]),
      ],
      nomeProgramaCorte: [null, Validators.required],
      anguloVidea: [null, Validators.required],
      dataRevisao: [null, Validators.required],

      velocidadeSalto: [null, Validators.required],
      velocidadeProcessamento: [null, Validators.required],
      intensidade: [null, Validators.required],
      frequencia: [null, Validators.required],

      temperaturaLavadora: [null, Validators.required],

      superficie: [null, Validators.required],
      metal: [null, Validators.required],
      raio: [null, Validators.required],
      tipo: [null, Validators.required],
      gravacao: [null, Validators.required],
    });
  }

  onParametrosChanged(parametros: any) {
    this.parametroNJ = parametros;
  }

  onParametrosChangedYg(parametros: any) {
    this.parametroYG = parametros;
  }

  onSubmit() {
    if (this.formPartnumber.valid && this.maquinaSelected.value === 'NJ') {
      const {
        partNumber,
        linha,
        nomeProgramaCorte,
        anguloVidea,
        dataRevisao,
        velocidadeSalto,
        velocidadeProcessamento,
        intensidade,
        frequencia,
        temperaturaLavadora,
        superficie,
        metal,
        raio,
        tipo,
        gravacao,
      } = this.formPartnumber.value;
      const { atrasarAvanco, atrasarLeituraEspelho } = this.parametroNJ;
      const {
        atrasarA1,
        atrasarA2,
        atrasarA3,
        atrasarA4,
        atrasarB1,
        atrasarB2,
        atrasarB3,
        atrasarB4,
      } = this.parametroNJ.p1[0];
      const {
        anteciparA1,
        anteciparA2,
        anteciparA3,
        anteciparA4,
        anteciparB1,
        anteciparB2,
        anteciparB3,
        anteciparB4,
      } = this.parametroNJ.p1[1];
      const {
        anguloA1,
        anguloA2,
        anguloA3,
        anguloA4,
        anguloB1,
        anguloB2,
        anguloB3,
        anguloB4,
      } = this.parametroNJ.p1[2];
      const {
        velGiroA1,
        velGiroA2,
        velGiroA3,
        velGiroA4,
        velGiroB1,
        velGiroB2,
        velGiroB3,
        velGiroB4,
      } = this.parametroNJ.p1[3];
      const {
        pressaoA1,
        pressaoA2,
        pressaoA3,
        pressaoA4,
        pressaoB1,
        pressaoB2,
        pressaoB3,
        pressaoB4,
      } = this.parametroNJ.p1[4];
      this.parametroService
        .create({
          partNumber: partNumber.toLowerCase(),
          linha,
          nomeProgramaCorte: nomeProgramaCorte.toLowerCase(),
          anguloVidea,
          maquina: this.maquinaSelected.value!,
          dataRevisao,
          atrasarAvanco,
          atrasarLeituraEspelho,
          p1: [
            {
              a1: atrasarA1,
              a2: atrasarA2,
              a3: atrasarA3,
              a4: atrasarA4,
              b1: atrasarB1,
              b2: atrasarB2,
              b3: atrasarB3,
              b4: atrasarB4,
            },
            {
              a1: anteciparA1,
              a2: anteciparA2,
              a3: anteciparA3,
              a4: anteciparA4,
              b1: anteciparB1,
              b2: anteciparB2,
              b3: anteciparB3,
              b4: anteciparB4,
            },
            {
              a1: anguloA1,
              a2: anguloA2,
              a3: anguloA3,
              a4: anguloA4,
              b1: anguloB1,
              b2: anguloB2,
              b3: anguloB3,
              b4: anguloB4,
            },
            {
              a1: velGiroA1,
              a2: velGiroA2,
              a3: velGiroA3,
              a4: velGiroA4,
              b1: velGiroB1,
              b2: velGiroB2,
              b3: velGiroB3,
              b4: velGiroB4,
            },
            {
              a1: pressaoA1,
              a2: pressaoA2,
              a3: pressaoA3,
              a4: pressaoA4,
              b1: pressaoB1,
              b2: pressaoB2,
              b3: pressaoB3,
              b4: pressaoB4,
            },
          ],
          velocidadeSalto,
          velocidadeProcessamento,
          intensidade,
          frequencia,
          temperaturaLavadora,
          superficie,
          metal,
          raio,
          tipo,
          gravacao,
        })
        .subscribe((parametro) => {
          try {
            this.router.navigate(['/']);
            this._snackBar.open('Parâmetro lançado!', 'X', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 3000,
            });
          } catch (error) {
            console.log('Algo errado aconteceu...', error);
          }
        });
    }
    if (this.formPartnumber.valid && this.maquinaSelected.value === 'YG') {
      const {
        partNumber,
        linha,
        nomeProgramaCorte,
        anguloVidea,
        dataRevisao,
        velocidadeSalto,
        velocidadeProcessamento,
        intensidade,
        frequencia,
        temperaturaLavadora,
        superficie,
        metal,
        raio,
        tipo,
        gravacao,
      } = this.formPartnumber.value;
      const {
        tempoEnvio1,
        tempoEnvio2,
        atrasoEntradaBraco,
        retardoVentosa,
        atrasoSaidaBracoDianteira,
        atrasoSaidaBracoTraseira,
        tempoGiroDianteira,
        tempoGiroTraseira,
        velocidadeLixEsq,
        velocidadeLapDireita,
        qtdVoltasFrontal,
        qtdVoltasTraseira,
        pressaoLixado,
        pressaoLapidado,
        rvm,
        rvmRaio,
        rvmMin,
        rvmMax,
      } = this.parametroYG;
      this.parametroService
        .createYG({
          partNumber: partNumber.toLowerCase(),
          linha,
          nomeProgramaCorte: nomeProgramaCorte.toLowerCase(),
          anguloVidea,
          maquina: this.maquinaSelected.value!,
          dataRevisao,

          tempoEnvio1,
          tempoEnvio2,
          atrasoEntradaBraco,
          retardoVentosa,
          atrasoSaidaBracoDianteira,
          atrasoSaidaBracoTraseira,
          tempoGiroDianteira,
          tempoGiroTraseira,
          velocidadeLixEsq,
          velocidadeLapDireita,
          qtdVoltasFrontal,
          qtdVoltasTraseira,
          pressaoLixado,
          pressaoLapidado,

          velocidadeSalto,
          velocidadeProcessamento,
          intensidade,
          frequencia,
          temperaturaLavadora,
          superficie,
          metal,
          raio,
          tipo,
          gravacao,

          rvm,
          rvmRaio,
          rvmMin,
          rvmMax,
        })
        .subscribe((parametro) => {
          try {
            this.router.navigate(['/']);
            this._snackBar.open('Parâmetro lançado!', 'X', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 3000,
            });
          } catch (error) {
            console.log('Algo errado aconteceu...', error);
          }
        });
    }
  }

  onBack() {
    this.router.navigate(['/']);
  }
}

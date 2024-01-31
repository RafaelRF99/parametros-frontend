import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { YgLaunchService } from 'src/app/services/yg-launch.service';

@Component({
  selector: 'app-yang-guan-launch',
  templateUrl: './yang-guan-launch.component.html',
  styleUrls: ['./yang-guan-launch.component.scss'],
})
export class YangGuanLaunchComponent {
  @Output() parametrosChanged = new EventEmitter<any>();
  parametroForm = this.ygService.formNJ;

  myControl = new FormControl('');
  options: string[] = ['Sim', 'Não'];

  constructor(private ygService: YgLaunchService) {
    this.ygService.formNJ.valueChanges.subscribe(() => {
      if (this.ygService.formNJ.get('rvmRaio')?.value !== null) {
        const form = {
          tempoEnvio1: this.ygService.formNJ.get('tempoEnvio1')?.value,
          tempoEnvio2: this.ygService.formNJ.get('tempoEnvio2')?.value,
          atrasoEntradaBraco:
            this.ygService.formNJ.get('atrasoEntradaBraco')?.value,
          retardoVentosa: this.ygService.formNJ.get('retardoVentosa')?.value,
          atrasoSaidaBracoDianteira: this.ygService.formNJ.get(
            'atrasoSaidaBracoDianteira'
          )?.value,
          atrasoSaidaBracoTraseira: this.ygService.formNJ.get(
            'atrasoSaidaBracoTraseira'
          )?.value,
          tempoGiroDianteira:
            this.ygService.formNJ.get('tempoGiroDianteira')?.value,
          tempoGiroTraseira:
            this.ygService.formNJ.get('tempoGiroTraseira')?.value,
          velocidadeLixEsq:
            this.ygService.formNJ.get('velocidadeLixEsq')?.value,
          velocidadeLapDireita: this.ygService.formNJ.get(
            'velocidadeLapDireita'
          )?.value,
          qtdVoltasFrontal:
            this.ygService.formNJ.get('qtdVoltasFrontal')?.value,
          qtdVoltasTraseira:
            this.ygService.formNJ.get('qtdVoltasTraseira')?.value,
          pressaoLixado: this.ygService.formNJ.get('pressaoLixado')?.value,
          pressaoLapidado: this.ygService.formNJ.get('pressaoLapidado')?.value,

          rvm: true,
          rvmRaio: this.ygService.formNJ.get('rvmRaio')?.value,
          rvmMin: this.ygService.formNJ.get('rvmMin')?.value,
          rvmMax: this.ygService.formNJ.get('rvmMax')?.value,
        };
        this.parametrosChanged.emit(form);
      }
      if (this.ygService.formNJ.get('rvmRaio')?.value === null) {
        const form = {
          tempoEnvio1: this.ygService.formNJ.get('tempoEnvio1')?.value,
          tempoEnvio2: this.ygService.formNJ.get('tempoEnvio2')?.value,
          atrasoEntradaBraco:
            this.ygService.formNJ.get('atrasoEntradaBraco')?.value,
          retardoVentosa: this.ygService.formNJ.get('retardoVentosa')?.value,
          atrasoSaidaBracoDianteira: this.ygService.formNJ.get(
            'atrasoSaidaBracoDianteira'
          )?.value,
          atrasoSaidaBracoTraseira: this.ygService.formNJ.get(
            'atrasoSaidaBracoTraseira'
          )?.value,
          tempoGiroDianteira:
            this.ygService.formNJ.get('tempoGiroDianteira')?.value,
          tempoGiroTraseira:
            this.ygService.formNJ.get('tempoGiroTraseira')?.value,
          velocidadeLixEsq:
            this.ygService.formNJ.get('velocidadeLixEsq')?.value,
          velocidadeLapDireita: this.ygService.formNJ.get(
            'velocidadeLapDireita'
          )?.value,
          qtdVoltasFrontal:
            this.ygService.formNJ.get('qtdVoltasFrontal')?.value,
          qtdVoltasTraseira:
            this.ygService.formNJ.get('qtdVoltasTraseira')?.value,
          pressaoLixado: this.ygService.formNJ.get('pressaoLixado')?.value,
          pressaoLapidado: this.ygService.formNJ.get('pressaoLapidado')?.value,
        };
        this.parametrosChanged.emit(form);
      }
    });
  }
}

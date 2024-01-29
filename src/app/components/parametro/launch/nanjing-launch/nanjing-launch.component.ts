import { Component, EventEmitter, Output } from '@angular/core';
import { NjLaunchService } from 'src/app/services/nj-launch.service';

@Component({
  selector: 'app-nanjing-launch',
  templateUrl: './nanjing-launch.component.html',
  styleUrls: ['./nanjing-launch.component.scss'],
})
export class NanjingLaunchComponent {
  @Output() parametrosChanged = new EventEmitter<any>();
  parametrosForm = this.njLaunch.formNJ;

  constructor(private njLaunch: NjLaunchService) {
    this.njLaunch.formNJ.valueChanges.subscribe(() => {
      const form = {
        atrasarAvanco: this.njLaunch.formNJ.get('atrasarAvanco')?.value,
        atrasarLeituraEspelho: this.njLaunch.formNJ.get('atrasarLeituraEspelho')
          ?.value,
        p1: [
          {
            atrasarA1: this.njLaunch.formNJ.get('atrasarA1')?.value,
            atrasarA2: this.njLaunch.formNJ.get('atrasarA2')?.value,
            atrasarA3: this.njLaunch.formNJ.get('atrasarA3')?.value,
            atrasarA4: this.njLaunch.formNJ.get('atrasarA4')?.value,
            atrasarB1: this.njLaunch.formNJ.get('atrasarB1')?.value,
            atrasarB2: this.njLaunch.formNJ.get('atrasarB2')?.value,
            atrasarB3: this.njLaunch.formNJ.get('atrasarB3')?.value,
            atrasarB4: this.njLaunch.formNJ.get('atrasarB4')?.value,
          },
          {
            anteciparA1: this.njLaunch.formNJ.get('anteciparA1')?.value,
            anteciparA2: this.njLaunch.formNJ.get('anteciparA2')?.value,
            anteciparA3: this.njLaunch.formNJ.get('anteciparA3')?.value,
            anteciparA4: this.njLaunch.formNJ.get('anteciparA4')?.value,
            anteciparB1: this.njLaunch.formNJ.get('anteciparB1')?.value,
            anteciparB2: this.njLaunch.formNJ.get('anteciparB2')?.value,
            anteciparB3: this.njLaunch.formNJ.get('anteciparB3')?.value,
            anteciparB4: this.njLaunch.formNJ.get('anteciparB4')?.value,
          },
          {
            anguloA1: this.njLaunch.formNJ.get('anguloA1')?.value,
            anguloA2: this.njLaunch.formNJ.get('anguloA2')?.value,
            anguloA3: this.njLaunch.formNJ.get('anguloA3')?.value,
            anguloA4: this.njLaunch.formNJ.get('anguloA4')?.value,
            anguloB1: this.njLaunch.formNJ.get('anguloB1')?.value,
            anguloB2: this.njLaunch.formNJ.get('anguloB2')?.value,
            anguloB3: this.njLaunch.formNJ.get('anguloB3')?.value,
            anguloB4: this.njLaunch.formNJ.get('anguloB4')?.value,
          },
          {
            velGiroA1: this.njLaunch.formNJ.get('velGiroA1')?.value,
            velGiroA2: this.njLaunch.formNJ.get('velGiroA2')?.value,
            velGiroA3: this.njLaunch.formNJ.get('velGiroA3')?.value,
            velGiroA4: this.njLaunch.formNJ.get('velGiroA4')?.value,
            velGiroB1: this.njLaunch.formNJ.get('velGiroB1')?.value,
            velGiroB2: this.njLaunch.formNJ.get('velGiroB2')?.value,
            velGiroB3: this.njLaunch.formNJ.get('velGiroB3')?.value,
            velGiroB4: this.njLaunch.formNJ.get('velGiroB4')?.value,
          },
          {
            pressaoA1: this.njLaunch.formNJ.get('pressaoA1')?.value,
            pressaoA2: this.njLaunch.formNJ.get('pressaoA2')?.value,
            pressaoA3: this.njLaunch.formNJ.get('pressaoA3')?.value,
            pressaoA4: this.njLaunch.formNJ.get('pressaoA4')?.value,
            pressaoB1: this.njLaunch.formNJ.get('pressaoB1')?.value,
            pressaoB2: this.njLaunch.formNJ.get('pressaoB2')?.value,
            pressaoB3: this.njLaunch.formNJ.get('pressaoB3')?.value,
            pressaoB4: this.njLaunch.formNJ.get('pressaoB4')?.value,
          },
        ],
      };

      this.parametrosChanged.emit(form);
    });
  }
}

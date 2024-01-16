import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParametroComponent } from './components/parametro/parametro.component';
import { NanjingComponent } from './components/parametro/nanjing/nanjing.component';
import { YangGuanComponent } from './components/parametro/yang-guan/yang-guan.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametroComponent,
    NanjingComponent,
    YangGuanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

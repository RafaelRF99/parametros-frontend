import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParametroComponent } from './components/parametro/parametro.component';
import { NanjingComponent } from './components/parametro/nanjing/nanjing.component';
import { YangGuanComponent } from './components/parametro/yang-guan/yang-guan.component';
import { SearchComponent } from './components/search/search.component';
import { LaunchComponent } from './components/parametro/launch/launch.component';
import { NanjingLaunchComponent } from './components/parametro/launch/nanjing-launch/nanjing-launch.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { BtnOptionsComponent } from './components/btn-options/btn-options.component';

import { LancamentoComponent } from './pages/lancamento/lancamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametroComponent,
    NanjingComponent,
    YangGuanComponent,
    SearchComponent,
    LaunchComponent,
    NanjingLaunchComponent,
    HomeComponent,
    AuthenticationComponent,
    LancamentoComponent,
    HomeComponent,
    BtnOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

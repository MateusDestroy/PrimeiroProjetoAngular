
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/home/app.component';

import { MeuPrimeiro2Component } from './components/cabecalho/meu-primeiro2.component';
import { Faixa1Component } from './components/faixa1/faixa1.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiro2Component,
    Faixa1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

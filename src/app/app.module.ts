import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HomeModule } from './features/home/home.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SaudeModule } from './features/saude/saude.module';
import { InfraestruturaModule } from './features/infraestrutura/infraestrutura.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LayoutsModule,
    SaudeModule,
    InfraestruturaModule,
    RouterModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

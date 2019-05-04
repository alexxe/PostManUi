import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, routing, HttpClientModule, SharedModule],
  exports: [],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}

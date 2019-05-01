import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routes';
import { CoreModule } from './core/core.module';
import { DomainModule } from './domain/domain.module';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/guards/auth.guard';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    DomainModule,
    routing,
    HttpClientModule,
    SharedModule
  ],
  exports: [],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}

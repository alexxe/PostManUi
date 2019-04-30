import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from "./app.component";
import { appRoutingProviders, routing } from './app.routes';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CoreModule, 
    routing,
    TooltipModule.forRoot(), 
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],  
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}

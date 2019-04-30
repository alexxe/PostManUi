<<<<<<< HEAD
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from "./app.component";
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
>>>>>>> 98f5d72962c40344f8057191ed67821966aa8ab7
import { appRoutingProviders, routing } from './app.routes';
import { CoreModule } from './core/core.module';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
<<<<<<< HEAD
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
=======
    BrowserModule,
    CoreModule,
    routing,
    GraphQLModule,
    HttpClientModule
  ],
  exports: [],
>>>>>>> 98f5d72962c40344f8057191ed67821966aa8ab7
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}

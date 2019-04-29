import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LoginComponent
    
  ],
  exports: [LoginComponent],
  providers: [
   
  ]
})
export class CoreModule {
  
}
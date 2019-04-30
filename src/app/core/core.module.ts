import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guards/auth.guard';
import { Auth } from './services/auth.service';
import { GatewayService } from './services/gateway.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [SharedModule, CommonModule, RouterModule],
  declarations: [LoginComponent, HomeComponent, DashboardComponent],
  exports: [LoginComponent, HomeComponent, DashboardComponent],
  providers: [AuthGuard, Auth, GatewayService]
})
export class CoreModule {}

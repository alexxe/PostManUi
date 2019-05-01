import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { GraphQLModule } from './../graphql.module';

@NgModule({
  imports: [SharedModule, CommonModule, CoreModule, GraphQLModule],
  declarations: [HomeComponent, DashboardComponent],
  exports: [HomeComponent, DashboardComponent],
  providers: []
})
export class DomainModule {}

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphQLModule } from './graphql.module';
import { PostDetailsComponent } from './post/details/post.component';
import { DomainRoutingModule } from './domain-routing.module';
@NgModule({
  imports: [SharedModule, GraphQLModule, DomainRoutingModule],
  declarations: [HomeComponent, DashboardComponent, PostDetailsComponent],
  exports: [],
  providers: []
})
export class DomainModule {}

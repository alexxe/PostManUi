import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphQLModule } from './graphql.module';
import { PostDetailsComponent } from './post/details/post.component';
import { DomainRoutingModule } from './domain-routing.module';
import { PostEditComponent } from './post/edit/post-edit.component';
@NgModule({
  imports: [SharedModule, GraphQLModule, DomainRoutingModule],
  declarations: [
    HomeComponent,
    DashboardComponent,
    PostDetailsComponent,
    PostEditComponent
  ],
  exports: [],
  providers: []
})
export class DomainModule {}

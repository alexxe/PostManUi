import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guards/auth.guard';
import { Auth } from './services/auth.service';

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthGuard, Auth]
})
export class CoreModule {}

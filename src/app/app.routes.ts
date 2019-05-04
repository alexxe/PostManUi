import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './domain/domain.module#DomainModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});

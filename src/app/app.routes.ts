import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//import { LoginComponent } from './core/components/login/login.component';


export const appRoutes: Routes = [
  //{ path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});

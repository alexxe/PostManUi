import { Component } from '@angular/core';
import { Auth } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-man';
  constructor(private auth: Auth) {}

  logout() {
    console.log('logout');
    this.auth.logout();
  }

  get isAuthenticated() {
    if (this.auth.getCachedAccessToken()) {
      return true;
    }
    return false;
  }
}

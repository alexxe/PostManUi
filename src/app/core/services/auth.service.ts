import { from as observableFrom, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class Auth {
  private token;
  constructor(private http: HttpClient, private router: Router) {}
  login(username: string, password: string) {
    this.http
      .post(
        `${environment.protocol}://${environment.graphApiEndpoint}/auth/login`,
        { username, password },
        { withCredentials: true }
      )
      .subscribe((res: any) => {
        this.token = res.token;
        this.router.navigateByUrl('/');
      });
  }

  logout() {
    this.token = null;
  }

  getCachedAccessToken() {
    return this.token;
  }
}

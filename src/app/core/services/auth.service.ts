import { from as observableFrom, Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class Auth {
  private token;
  private tokenRelived: Subject<any> = new Subject();
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
        this.tokenRelived.next();
        this.router.navigate(['home']);
      });
  }

  logout() {
    this.token = null;
    this.router.navigate(['login']);
  }

  getCachedAccessToken() {
    return this.token;
  }

  acquireToken(): Observable<any> {
    return this.tokenRelived;
  }
}

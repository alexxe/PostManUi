import { from as observableFrom, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class Auth {
  public token;
  constructor(private http: HttpClient, private router: Router) {}
  login(username: string, password: string) {
    this.http
      .post(
        `${environment.protocol}://${environment.graphApiEndpoint}/auth/login`,
        { username, password }
      )
      .subscribe((res: any) => {
        this.token = res.token;
        this.router.navigateByUrl('/');
      });
  }
}

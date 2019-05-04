import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Auth } from 'src/app/core/services/auth.service';
import { allPost } from './model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public posts: any[];
  private ngUnsubscribe = new Subject();
  constructor(private apollo: Apollo, private auth: Auth) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: allPost
      })
      .valueChanges.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(result => {
        if (result.data) {
          const data: any = result.data;
          this.posts = data.post;
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

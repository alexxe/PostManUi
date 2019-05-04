import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { allPost } from './model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public posts: any[];
  private ngUnsubscribe = new Subject();
  constructor(private apollo: Apollo, private router: Router) {}

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

  public details(evt, slug) {
    evt.preventDefault();
    evt.stopPropagation();
    this.router.navigate(['post', slug]);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Auth } from 'src/app/core/services/auth.service';
import { myPost } from './model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public posts: any[];
  private ngUnsubscribe = new Subject();
  constructor(private apollo: Apollo, private auth: Auth) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: myPost,
        variables: {
          $where: {
            user_id: { _eq: this.auth.user.id }
          }
        }
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

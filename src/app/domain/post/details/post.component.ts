import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { filter, map, takeUntil, switchMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { getPostBySlug } from './model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostDetailsComponent implements OnInit {
  public post: any;
  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(p => p.slug),
        filter(p => p),
        switchMap(slug => {
          return this.apollo.watchQuery({
            query: getPostBySlug,
            variables: {
              $where: {
                slug: { _eq: slug }
              }
            }
          }).valueChanges;
        })
      )
      .subscribe(res => {
        if (res.data) {
          const data: any = res.data;
          this.post = data.post[0];
        }
      });
  }
}

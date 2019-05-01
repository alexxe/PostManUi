import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Auth } from 'src/app/core/services/auth.service';
import { myPost } from './model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts: any[];
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
      .valueChanges.subscribe(result => {
        if (result.data) {
          const data: any = result.data;
          this.posts = data.post;
        }
      });
  }
}

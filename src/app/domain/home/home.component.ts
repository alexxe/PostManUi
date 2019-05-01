import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    console.log('home');
    this.apollo
      .watchQuery({
        query: gql`
          {
            post {
              body
              cover_imag
              created_on
              id
              intro
              slug
              title
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
  }
}

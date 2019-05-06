import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { filter, map, takeUntil, switchMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { getPostBySlug } from './model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  public Editor = ClassicEditor;
  public form: FormGroup;
  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ''
    });
  }

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
          const post = data.post[0];
          this.form.patchValue(post);
        }
      });
  }

  save() {
    console.log(this.form.value);
  }
}

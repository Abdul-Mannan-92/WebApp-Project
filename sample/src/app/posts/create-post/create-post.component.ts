// @ts-ignore
import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {NgForm} from "@angular/forms";
import {PostService} from "../post.service";
// @ts-ignore
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Post} from "../post.model";

// @ts-ignore
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = {id: '', title: '', content: ''};
  isLoading: boolean = false;
  private mode: string = 'create';
  private postId: string = '';

  constructor(public postService: PostService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = <string>paramMap.get('postId');
        this.isLoading = true;
        this.postService.getPostById(this.postId).subscribe((post: { _id: any; title: any; content: any; }) => {
          this.isLoading = false;
          this.post = {id: post._id, title: post.title, content: post.content};
        });
      } else {
        this.mode = 'create';
        this.postId = '';
      }
    });
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postService.addPost(form.value.title, form.value.content);
      form.resetForm()
    } else{
      this.postService.updatePost(this.postId, form.value.title, form.value.content);
    }
  }
}

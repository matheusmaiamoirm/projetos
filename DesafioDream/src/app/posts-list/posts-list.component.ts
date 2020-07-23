import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];
  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.posts = dados);
  }

}

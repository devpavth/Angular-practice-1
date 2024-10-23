import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(
      (data) =>{
        this.posts = data;
        console.log(this.posts);
      },
      (error) =>{
        console.log('Error fetching posts:', error);
      }
    )
  }

}

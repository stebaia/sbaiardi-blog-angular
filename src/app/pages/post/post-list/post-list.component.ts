import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post/post.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  displayedColumns = [ 'position', 'name'];
 


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.postService.getListPost().subscribe(posts => 
      this.posts = posts
    )
  }

  deletePost(index: number){
    //call api delete
    //delete from list
    this.posts.slice(index)
    location.reload()
    console.log('eliminato! ' + index);
  }

  unPubblishPost(index: number){
    //call api unpubblish
    //delete from list
    location.reload()
    console.log('depubblicato! ' + index);
  }

}

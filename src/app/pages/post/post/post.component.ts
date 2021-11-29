import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic'
import { DatePipe, formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public Editor = ClassicEditorBuild
  public currentDate = new Date()
  post: Post | undefined;

  categories: string[] = [
    "Android",
    "Angular",
    "Kotlin",
    "Java",
    "Ruby",
    "Rails"
  ]

  categoryList: Category[] | undefined;


  constructor(private route: ActivatedRoute,
    private service: PostService,
    private categoryService: CategoriesService) { }
  profileForm = new FormGroup({
    title: new FormControl(),
    subtitle: new FormControl(),
    snippet: new FormControl(),
    content: new FormControl(),
    published_at: new FormControl(),
    is_published: new FormControl(),
    categories: new FormControl()
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0 && id != null) {
      this.getPost(id)
    }
  }

  getPost(id: number):void{
    this.service.getPost(id).subscribe(post => {
      this.post = post
      this.profileForm = new FormGroup({
        title: new FormControl(post.title),
        subtitle: new FormControl(post.subtitle),
        snippet: new FormControl(post.snippet),
        content: new FormControl(post.content),
        published_at: new FormControl(new Date(Number(post.published_at))),
        is_published: new FormControl(post.is_published),
        categories: new FormControl(this.getCategoriesSelected(post.categories))
      });
    })
  }

  getCategoryList(): void {
    this.categoryService.getListCategory().subscribe(
      catList => this.categoryList = catList
     )
  } 

  getCategoriesSelected(categories: Category[]): number[]{
    const listOfNameCategory: number[] = []
    categories.forEach(function (category) {
      listOfNameCategory.push(category.id || 0)
    })
    return listOfNameCategory
  }

  onSubmit() {
    const { title } = this.profileForm.value
    const { subtitle } = this.profileForm.value
    const { snippet } = this.profileForm.value
    const { content } = this.profileForm.value
    const { published_at } = this.profileForm.value
    const { is_published } = this.profileForm.value
    const { categories } = this.profileForm.value
    

    const post: Post = {
      title:title,
      subtitle: subtitle,
      snippet: snippet,
      content: content,
      author_id: 1,
      created_at:  formatDate(this.currentDate, 'yyyy-MM-dd', 'it-IT'),
      published_at: formatDate(published_at, 'yyyy-MM-dd', 'it-IT'),
      is_published: is_published,
      categories: categories
    }
    // TODO: Use EventEmitter with form value
    console.warn(post);
  }
}

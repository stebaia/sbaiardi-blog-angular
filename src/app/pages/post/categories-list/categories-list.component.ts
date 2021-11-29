import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {


  categories: Category[] = []


  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getListCategory().subscribe(
      categories => this.categories = categories
    )
  }

  deletePost(index: number){
    //call api delete
    //delete from list
    this.categories.slice(index)
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

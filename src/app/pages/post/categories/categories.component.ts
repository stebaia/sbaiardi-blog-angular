import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: Category | undefined
  public currentDate = new Date()
  constructor(private route: ActivatedRoute,
    private categoryService: CategoriesService) { }

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      if (id != 0 && id != null) {
        this.getCategory(id)
      }
    }

  getCategory(id: number): void {
    this.categoryService.getCategory(id).subscribe(
      cat => {
        this.category = cat
        this.profileForm = new FormGroup({
          title: new FormControl(cat.title)
        })
      }
    )
  }

  profileForm = new FormGroup({
    title: new FormControl()
  });

  onSubmit(){
    const { title } = this.profileForm.value
    const cat: Category = {
      title: title,
      created_at: formatDate(this.currentDate, 'yyyy-MM-dd', 'it-IT'),
    }
    console.warn(cat);
  }
}

import {Component, inject} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

export interface Review {
  message: string;
}

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatGridListModule, NgForOf],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export class GridListComponent {
  http = inject(HttpClient);
  reviews: Review[] = [];
  data: any = [];
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Review[]>('http://localhost:8080/api/v1/reviews').subscribe(data => {
      this.reviews = data;
    });
  }
}

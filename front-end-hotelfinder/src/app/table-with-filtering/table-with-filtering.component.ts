  import {
  Component,
  OnInit,
  inject,
  Input,
  SimpleChanges,
  ChangeDetectionStrategy,
  OnChanges,
    Output
  } from '@angular/core';
  import {MatTableDataSource, MatTableModule} from '@angular/material/table';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatIcon} from "@angular/material/icon";
  import {FormsModule} from "@angular/forms";
  import {MatButton, MatIconButton} from '@angular/material/button';
  import { MatCard } from '@angular/material/card';
  import {HttpClient, HttpClientModule} from '@angular/common/http';
  import {MatInput} from "@angular/material/input";
  import {ReactiveFormsModule} from "@angular/forms";
  import {MatIconModule} from '@angular/material/icon';
  import {MatButtonModule} from '@angular/material/button';
  export interface Hotel {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  }

  @Component({
    selector: 'TableFilteringExample',
    styleUrl: 'table-with-filtering.component.css',
    templateUrl: 'table-with-filtering.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatIcon, FormsModule, MatButton, MatIconButton, MatCard, HttpClientModule, MatInput,ReactiveFormsModule,MatIconModule,MatButtonModule],
  })
  export class TableFilteringExample implements OnInit{

    displayedColumns: string[] = ['id', 'name', 'latitude', 'longitude'];
    dataSource = new MatTableDataSource<Hotel>([]);
    clickedRows = new Set<Hotel>();

    @Input() value: string = '';


    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData(): void {
      if (!this.value) {
        this.http.get<Hotel[]>('http://localhost:8080/api/v1/hotels').subscribe(data => {
          this.dataSource.data = data;
        });
      } else {
        const latitude = 46.769965;
        const longitude = 23.589804;
        console.log(latitude.toString());
        console.log(longitude.toString());
        console.log(this.value);


        this.http.get<Hotel[]>('http://localhost:8080/api/v1/hotels/nearby', {
          params: {
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            radius: this.value
          }
        }).subscribe(data => {
          this.dataSource.data = data;
        });
      }
    }

  }

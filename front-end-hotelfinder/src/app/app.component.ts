import {Component, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TableFilteringExample} from './table-with-filtering/table-with-filtering.component'
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow, MatRow,
  MatTable
} from "@angular/material/table";
import {GridListComponent} from "./grid-list/grid-list.component";
import {MatButton} from "@angular/material/button";
import {ListComponent} from "./list/list.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCard, MatCardContent, MatSelectionList, MatListOption, MatCardTitle, MatCardHeader, MatDivider, MatFormField, MatInputModule, MatTable, MatColumnDef, MatNoDataRow, MatHeaderRowDef, MatCell, MatHeaderCell, MatHeaderRow, MatRow, TableFilteringExample, GridListComponent, MatButton, MatLabel, ListComponent, RouterLink, HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(ListComponent) listGrid!: ListComponent;

  constructor(private http: HttpClient) {}

  bookSelectedRoom(): void {
    const selectedRoomNumber = this.listGrid.getSelectedRoomNumber();
    console.log(selectedRoomNumber);
    if (selectedRoomNumber) {
      this.http.put(`http://localhost:8080/api/v1/bookRoom/${selectedRoomNumber}`, {}).subscribe(
        () => {
          console.log('Room booked successfully');
        },
        (error) => {
          console.error('Error booking room:', error);
        }
      );
    } else {
      console.error('No room selected');
    }
  }


}

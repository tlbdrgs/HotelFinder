import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow, MatRow,
  MatTable
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

interface Room {
  roomNumber: number;
  price: number;
  isAvailable: boolean;
}

@Component({
  selector: 'listGrid',
  standalone: true,
  imports: [RouterOutlet, MatCard, MatCardContent, MatSelectionList, MatListOption, MatCardTitle, MatCardHeader, MatDivider, MatFormField, MatInput, MatTable, MatColumnDef, MatNoDataRow, MatHeaderRowDef, MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatButton, MatLabel, NgForOf, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  @ViewChild('roomsList') roomsList!: MatSelectionList;
  rooms: Room[] = [];
  selectedOption: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms(): void {
    this.http.get<Room[]>('http://localhost:8080/api/v1/rooms').subscribe(
      (data: Room[]) => {
        this.rooms = data;
      },
      (error) => {
        console.error('Error fetching rooms:', error);
      }
    );
  }
  bookRoom(roomNumber: number): void {
    console.log('Booking room:', roomNumber);
    this.http.put(`http://localhost:8080/api/v1/bookRoom/${roomNumber}`, {}).subscribe(
      () => {
        const roomIndex = this.rooms.findIndex(room => room.roomNumber === roomNumber);
        if (roomIndex !== -1) {
          this.rooms[roomIndex].isAvailable = !this.rooms[roomIndex].isAvailable;
        }
      },
      (error) => {
        console.error('Error booking room:', error);
      }
    );
  }

  getSelectedRoomNumber(): number | undefined {
    const selectedOptions = this.roomsList.selectedOptions.selected;
    if (selectedOptions.length > 0) {
      return selectedOptions[0].value.roomNumber;
    } else {
      return undefined;
    }
  }

  onNgModelChange($event: any) {
      console.log(this.selectedOption);
  }
}

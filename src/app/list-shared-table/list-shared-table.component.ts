import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({

  selector: 'app-list-shared-table',
  templateUrl: './list-shared-table.component.html',
  styleUrls: ['./list-shared-table.component.css']
  
})

export class ListSharedTableComponent implements OnInit {
@Input() tableHeader:string[]
@Input() tableColumn:string[]  //ye5o input mel composant parent
@Input() listData:any[]
@Output() actionOutput =new EventEmitter()  

@Input() HeaderSociete:string[]
@Input() ColumnSociete : string[]
@Input() listDataSociete:any[]


  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  action(action:string,id:number){ //
    this.actionOutput.emit({action:action,id:id}) /////// emit action to parent component
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AddModalComponent, {
      width: '600px',
      data: 'Add Post'
    });
}
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AddModalComponent } from '../add-modal/add-modal.component';
import { UsersServiceService} from '../services/users-service.service';

@Component({

  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']

})

export class ListUsersComponent implements OnInit {


tableHeaderUser=['#','Nom','Prenom','Adresse','PhoneNumber','actions']
tableColumnUser=['id','nom','prenom','adresse','phoneNumber'] //parent lel fils shared transfert
listUsers=[]

  constructor(private usersService: UsersServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers()
    
  }

//                                       

  getUsers(){

    this.listUsers = this.usersService.USERS_DATA ;
    console.log("all users",this.listUsers);
    
  }

 onDelete(id:Number){
 this.usersService.onDelete(id) ;

  console.log("supp users",this.listUsers);
 }
 
 openDialog(): void {
  let dialogRef = this.dialog.open(AddModalComponent, {
    width: '600px',
    data: 'Add Post'
  });
  
/* 
  dialogRef.componentInstance.event.subscribe((result) => {
    this.usersService.addPost(result.data);
    this.dataSource = new PostDataSource(this.usersService);
  }); */
}

updateUser(id:number){
  this.usersService.updateUser(id)
  
}

getActionOutput(data:{action:string,id:number}){  
    if(data.action==='delete') this.onDelete(data.id)
    else this.updateUser(data.id)
}
 
}


import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersServiceService } from '../services/users-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})

export class AddModalComponent implements OnInit {

  addUserForm: FormGroup =this.createForm()
  data: any
  user:any
  constructor( public dialog: MatDialog,private fb:FormBuilder,private dataService:UsersServiceService  ) { }

  ngOnInit(): void {
 console.log(this.data);
    
  }
  
createForm(){
  return this.fb.group({
    nom: ['', Validators.required], //initial state 
    prenom: ['',Validators.required],
    adresse: ['',Validators.required],
    // phoneNumber: ['',Validators.required],
    phoneNumber: ['',Validators.required, Validators.pattern('^[0-9]{8}$')],
    id: 0

  })
}



  onNoClick(): void {
    this.dialog.closeAll();
  }

  onSubmit(): void {
    this.addUserForm.get('id').setValue(this.dataService.USERS_DATA.length)
    console.log('form',this.addUserForm);
    // this.addUserForm.value.id = this.dataService.USERS_DATA.length;
    // this.user = this.addUser;
    this.dataService.addUser(this.addUserForm.value);
    this.dialog.closeAll();
  }
 
}

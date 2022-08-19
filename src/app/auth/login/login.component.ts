import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formLogin : FormGroup= this.connectedForm()
  
  constructor(private fb:FormBuilder) { }

  connectedForm(){
  return( 
    this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['',Validators.required],

  })
  )
}
  ngOnInit(): void {
    
  }

  onSubmit(){
console.log('aaaaaa',this.formLogin);

}
  
}

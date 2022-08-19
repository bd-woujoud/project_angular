



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registerForm = new FormGroup({

  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),

  // });


registerForm : FormGroup =this.addForm()
submitted = false;
  constructor(private fb : FormBuilder) { }

  addForm(){
    return this.fb.group({

    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  }
  )
}
ngOnInit(): void {

}

    // convenience getter for easy access to form fields
    // get f() { return this.registerForm.controls; }

    onSubmit() {

        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfuly registred' ,
          showConfirmButton: false,
          timer: 2000
        })
        // alert('SUCCESSfuly registred!!' + JSON.stringify(this.registerForm.value.firstName, null, 4));
    }


}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserContact } from '../usercontact/usercontact.model';
import { UsercontactService } from '../usercontact/usercontact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // constructor(private formBuilder: FormBuilder) {}
  constructor(private router: Router, private userService: UsercontactService) { }
  addForm: FormGroup;
  @Output()
  createUsercontact = new EventEmitter<UserContact>();

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
  // this.addForm = this.formBuilder.group({
  //     id: [],
  //     email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
  //     firstname: ['', Validators.required],
  //     lastname: ['', Validators.required]
  //   });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    console.log("submit");
    
    this.userService.create(this.addForm.value);

    this.router.navigate(['/list-user']);
  }
}

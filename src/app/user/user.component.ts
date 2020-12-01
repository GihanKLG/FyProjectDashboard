import { Component, OnInit } from '@angular/core';
import { UserService } from './../User.service';
import { FormBuilder } from '@angular/forms';
import { IUser } from './../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users$: Observable<IUser[]>;
  term: string;
   
  constructor(public userservice: UserService, public formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
      console.log(this.users$);
    });
   
  }

}

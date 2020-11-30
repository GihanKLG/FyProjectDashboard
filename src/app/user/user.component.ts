import { Component, OnInit } from '@angular/core';
import { UserService } from './../User.service';
import { IUser } from './../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  protected users$: Observable<IUser[]>;
  
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
      console.log(this.users$);
    });
  }

}

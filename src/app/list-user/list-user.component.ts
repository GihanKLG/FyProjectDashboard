import { Component, OnInit } from '@angular/core';
import { UserContact } from '../usercontact/usercontact.model';
import { UsercontactService } from '../usercontact/usercontact.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  usercontacts: UserContact[]; // Array<string>
  usercont: UserContact;

  constructor(private ucs: UsercontactService, private router: Router) { }

  editUserContact(usercontact: UserContact) {
    console.log(usercontact);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', usercontact.id.toString());
    this.router.navigate(['edit']);
    // this.ucs.update(usercontact);
  }

  deleteUserContact(usercontact: UserContact) {
    console.log(usercontact);
    this.ucs.delete(usercontact);
  }

  ngOnInit(): void {
    console.log('usercontact:init');
    this.usercontacts = this.ucs.getall();
    console.log(this.usercontacts);
  }

}

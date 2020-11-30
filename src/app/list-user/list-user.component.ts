import { Component, OnInit } from '@angular/core';
import { UserContact } from '../usercontact/usercontact.model';
// import { UsercontactService } from '../usercontact/usercontact.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  usercontacts: UserContact[]; // Array<string>
  usercont: UserContact;
  public displayedColumns = ['id', 'name', 'username', 'email' ];

  public dataSource = new MatTableDataSource<UserContact>();

  constructor(private router: Router, private http:HttpClient) { }

  display(usercontact: UserContact) {
    console.log(usercontact);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', usercontact.id.toString());
    this.router.navigate(['display']);
  }

  ngOnInit(): void {
    let responce:any[];
    var url = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(url).subscribe((res: any) => {
     console.log(res);
     this.dataSource.data = res as UserContact[]; 
     this.usercontacts  = res;
   })
    
  }

}




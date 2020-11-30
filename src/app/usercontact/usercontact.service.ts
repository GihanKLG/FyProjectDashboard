
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { UserContact } from './usercontact.model';
    import { Observable } from  'rxjs';


    @Injectable({
      providedIn: 'root'
    })
    export class UsercontactService {

      constructor(private httpClient: HttpClient) {}

      private Url = 'https://jsonplaceholder.typicode.com/users';

      readlist(): Observable<UserContact[]>{
      return this.httpClient.get<UserContact[]>(this.Url);
  }
    }


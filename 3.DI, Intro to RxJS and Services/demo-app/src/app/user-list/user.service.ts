import { Injectable, OnDestroy } from '@angular/core';
import { ComplexUser, SimpleUser } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Global
})
export class UserService implements OnDestroy {
  URL = 'https://jsonplaceholder.typicode.com/users';

  appUsers: ComplexUser[] = [];

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    // Unsubscribe
  }

  getUsers() {
    //return fetch(this.URL).then((res) => res.json());
    return this.http.get<ComplexUser[]>(this.URL);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // console.log(inputName.value);
    // console.log(inputAge.value);

    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    }

    //this.appUsers = [...this.appUsers, user]; // !IMPORTANT HACK
    // this.appUsers.push(user);

    inputName.value = '';
    inputAge.value = '';
  }
}

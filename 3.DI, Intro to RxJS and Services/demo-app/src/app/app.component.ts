import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-list/user.service';
import { ComplexUser, SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  providers: [UserService], // in this case the providedIn in the userService is not needed
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  isLoading = true;

  users: ComplexUser[] = [];


  constructor(private userService: UserService) {
    this.users = this.userService.appUsers;
  }

  ngOnInit() {
    // this.userService.getUsers().then((users) => {
    //   this.users = users;
    // })

    this.userService.getUsers().subscribe((users) => {

      setTimeout(() => {
        this.users = users;
        this.isLoading = false;
      }, 3000);
    })
  }

  handleClick() {
    this.title = 'Zdrasti!'
  }

  addSimpleUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // Validate input
    this.userService.addUser(inputName, inputAge);
  }
}



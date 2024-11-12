import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: User | null = null;

  constructor(private userService: UsersService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    // The resolver way - view will not display until data comes
    this.user = (this.activatedRoute.snapshot.data['user']);

    //The service way
    //const userId = this.activatedRoute.snapshot.params['id'];
    // this.userService.getSingleUser(userId).subscribe((user) => {
    //   this.user = user;
    // })
  }
}

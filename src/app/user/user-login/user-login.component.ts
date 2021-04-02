import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  message: string = '';
  
  constructor(
    private usrsvc: UserService,
    private router: Router
  ) { }

    login(): void {
      console.log("B4 Login: ", this.user);
      this.usrsvc.login(this.user.username, this.user.password).subscribe(
        res => {
          console.log("User: ", res);
          this.router.navigateByUrl("/users/list");
        },
        err => {
        console.error(err);
      }   
    );
  }

  ngOnInit(): void {
  }

}

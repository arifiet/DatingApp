import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Successfully');

    }, error => {
      console.log('Login Failed');
    });
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // short form to write if token !==null return true else return false
  }

  logout() {
     localStorage.removeItem('token');
     console.log('Logged Out');
  }

}

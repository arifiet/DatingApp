import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  // we use @Input for communication bw parent to child component, here register is child of home
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Registrion Successfull');
      console.log(this.model);
    }, error => {
      console.log(error);
    });
  }


  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}

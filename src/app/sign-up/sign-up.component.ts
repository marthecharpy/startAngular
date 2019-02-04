import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  email: Email = {
	id: 1,
        name: 'mail à renseigner'
     };

  constructor() { }

  ngOnInit() {
  }

}

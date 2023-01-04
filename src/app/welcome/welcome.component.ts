import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  addressControl: FormControl = new FormControl();
  addresses: string[] = ['Pionierstrasse 7', 'Pionierstrasse 8'];

  constructor() { }

  ngOnInit(): void {
  }

}

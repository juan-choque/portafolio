import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  namee: string = '';
  email: string = '';
  message: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  data(){
      console.log(this.namee)
      console.log(this.email)
      console.log(this.message)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public togle: boolean = false
  pivote:number;
  constructor() { }

  ngOnInit(): void {
    this.change()
  }

   change(){
     this.togle = !this.togle;
   }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  public user: any;
  public submitClicked: boolean;
  constructor() { 
    this.submitClicked=false;
    this.user={
      name:"",
      email: "",
   
    }
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitClicked=true;
    console.log(this.user)
  }
}

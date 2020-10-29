import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-home',
  templateUrl: './top-home.component.html',
  styleUrls: ['./top-home.component.scss']
})
export class TopHomeComponent implements OnInit {
  phone='../../../assets/images/home/desktop/illustration-phone-mockup.svg';
  public user: any;
  public submitClicked: boolean;

  constructor(private _route : ActivatedRoute, private _router : Router) { 
    this.submitClicked=false;
    this.user={
      name:"",
      email: "",
   
    
  }
  }

  ngOnInit(): void {
  }
  goToContact() {
    this
        ._router
        .navigate(['/contact']);
}
onSubmit(){
  this.submitClicked=true;
  console.log(this.user)
}
}

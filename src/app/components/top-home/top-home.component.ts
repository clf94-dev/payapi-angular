import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-home',
  templateUrl: './top-home.component.html',
  styleUrls: ['./top-home.component.scss']
})
export class TopHomeComponent implements OnInit {
  phone='../../../assets/images/home/desktop/illustration-phone-mockup.svg'
  constructor(private _route : ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
  }
  goToContact() {
    this
        ._router
        .navigate(['/contact']);
}

}

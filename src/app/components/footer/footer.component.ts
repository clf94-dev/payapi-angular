import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logo='../../../assets/images/shared/desktop/logo copy.svg'
  constructor(private _route : ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
  }
  goToAbout() {

    this
        ._router
        .navigate(['/about']);
}
goToPricing() {
    this
        ._router
        .navigate(['/pricing']);
}
goToContact() {
    this
        ._router
        .navigate(['/contact']);
}
goToHome() {
  this
      ._router
      .navigate(['/home']);
}
}

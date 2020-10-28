import { Component, OnInit } from '@angular/core';
import { MiddleHomeData } from './middleHomeData';

@Component({
  selector: 'app-middle-home',
  templateUrl: './middle-home.component.html',
  styleUrls: ['./middle-home.component.scss']
})
export class MiddleHomeComponent implements OnInit {
  public middledata: MiddleHomeData [];
  constructor() { 
    this.middledata=[
      new MiddleHomeData ('Easy to implement','Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.','Easy to implement','reverse','../../../assets/images/home/desktop/illustration-easy-to-implement.svg'),
      new MiddleHomeData ('Simple UI & UX','Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. ','Simple UI & UX','','../../../assets/images/home/desktop/illustration-simple-ui.svg')
    ];
  }

  ngOnInit(): void {
  }

}

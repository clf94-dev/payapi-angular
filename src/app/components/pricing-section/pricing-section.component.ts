import { Component, OnInit } from '@angular/core';
import { PricingData } from './pricingData';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss']
})
export class PricingSectionComponent implements OnInit {
  public pricingdata: PricingData[];
  constructor() {this.pricingdata=[
    new PricingData("Free Plan","Build and test using our core set of products with up to 100 API requests ", "$0.00", true, true, true, false,false,false, false),
   new PricingData("Basic Plan","Launch your project with unlimited requests and no contractual minimums ", "$249.00", true, true, true, true,true,false, false),
   new PricingData("Premium Plan","Get tailored solutions, volume pricing, and dedicated support for your team ", "$499.00", true,true,true,true,true,true,true)
   
   ] ; }

  ngOnInit(): void {
  }

}

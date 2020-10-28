import { Component, OnInit } from '@angular/core';
import { FeaturesHomeData } from './feturesHomeData';

@Component({
  selector: 'app-features-home',
  templateUrl: './features-home.component.html',
  styleUrls: ['./features-home.component.scss']
})
export class FeaturesHomeComponent implements OnInit {
  public featuresdata: FeaturesHomeData[];
  constructor() { 
    this.featuresdata=[
      new FeaturesHomeData('Personal Finances','Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ','Personal Finances','../../../assets/images/home/desktop/icon-personal-finances.svg'),
      new FeaturesHomeData('Banking & Coverage','With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.','Banking & Coverage','../../../assets/images/home/desktop/icon-banking-and-coverage.svg'),
      new FeaturesHomeData('Consumer Payments','It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.','Consumer Payments','../../../assets/images/home/desktop/icon-consumer-payments.svg')
    ]
  }

  ngOnInit(): void {
  }

}

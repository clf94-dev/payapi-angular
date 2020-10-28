import { Component, OnInit } from '@angular/core';
import { PrinciplesData } from './principlesData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public principles1: PrinciplesData[];
  public principles2: PrinciplesData[];
  constructor() {
    this.principles1 = [
      new PrinciplesData("Our Vision" , "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "),
      new PrinciplesData("Our Business" , "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. ")
    ];
    this.principles2 = [
      new PrinciplesData("The Culture" , "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."),
      new PrinciplesData("The People" , "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.")
    ];
   }

  ngOnInit(): void {
  }

}

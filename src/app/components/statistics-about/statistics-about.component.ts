import { Component, OnInit } from '@angular/core';
import { StatisticsData } from './statisticsData';

@Component({
  selector: 'app-statistics-about',
  templateUrl: './statistics-about.component.html',
  styleUrls: ['./statistics-about.component.scss']
})
export class StatisticsAboutComponent implements OnInit {
  study='../../../assets/images/about/desktop/image-team-members.jpg';

  public statisticsdata: StatisticsData[];

  constructor() {  this.statisticsdata =[
    new StatisticsData("Team Members" , "300+"),
    new StatisticsData("Offices in the US" , "3"),
    new StatisticsData("Transactions analyzed" , "10M+")
  ] }

  ngOnInit(): void {
  }

}

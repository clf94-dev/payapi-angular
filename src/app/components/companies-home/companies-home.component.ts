import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-home',
  templateUrl: './companies-home.component.html',
  styleUrls: ['./companies-home.component.scss']
})
export class CompaniesHomeComponent implements OnInit {
  google='../../../assets/images/shared/desktop/google.svg'
  microsoft='../../../assets/images/shared/desktop/microsoft.svg'
  hp='../../../assets/images/shared/desktop/hewlett-packard.svg'
  oracle='../../../assets/images/shared/desktop/oracle.svg'
  tesla='../../../assets/images/shared/desktop/tesla.svg'
  nVidia='../../../assets/images/shared/desktop/nvidia.svg'
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

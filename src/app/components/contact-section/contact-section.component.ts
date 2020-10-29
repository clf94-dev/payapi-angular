import { Component, OnInit } from '@angular/core';
import { LogosInfo } from './logosInfo';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  public logos: LogosInfo[];
  public user: any;
  constructor() {
    this.logos =[
      new LogosInfo("../../../assets/images/shared/desktop/google.svg", "Google"),
      new LogosInfo("../../../assets/images/shared/desktop/hewlett-packard.svg", "Hp"),
      new LogosInfo("../../../assets/images/shared/desktop/microsoft.svg", "Microsoft"),
      new LogosInfo("../../../assets/images/shared/desktop/tesla.svg", "Tesla"),
      new LogosInfo("../../../assets/images/shared/desktop/oracle.svg", "Oracle"),
      new LogosInfo("../../../assets/images/shared/desktop/nvidia.svg", "NVidia")

    ];
this.user={
  name:"",
  email: "",
  company: "",
  title: "",
  message: ""
}
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
    console.log(this.user)
  }
}

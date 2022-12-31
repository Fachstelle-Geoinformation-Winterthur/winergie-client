import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public validAddress: boolean = false;
  public streetName: string = "";
  public houseNo: number = 0;

  private activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
      this.streetName = params['street'];
      this.houseNo = parseInt(params['no']);

      if(this.streetName && this.houseNo !== 0){
        this.validAddress = true;  
      }

    });

  }


}

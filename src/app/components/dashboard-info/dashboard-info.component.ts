import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service';
import {PartnerInfo} from '../../model/partner-info';
import {AppConst} from '../../constant/AppConst';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {
  totalRecordCount: number;
  selectedPage: number;
  recordsPerPage: number;

  public partnerInfo: PartnerInfo[];
  private serverPath = AppConst.serverPath;

  constructor(private dashboardService:DashboardService) {
   this.totalRecordCount = 0;
   this.recordsPerPage = 10;
   this.selectedPage = 1;


   this.dashboardService.getDashboardInfo(1).subscribe(
      res => {
      console.log(res); 
      this.partnerInfo = res.json();
      },
      err => {
        console.log(err);
      }
      ); 
  }

  ngOnInit(): void {
  }

  selectPage(page: number) {
    this.dashboardService.getDashboardInfo(page).subscribe(
      res => {
      console.log(res); 
      this.partnerInfo = res.json();
      },
      err => {
        console.log(err);
      }
      );  
  }
  
}

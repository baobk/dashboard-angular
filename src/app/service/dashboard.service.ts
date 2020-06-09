import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions}  from '@angular/http';
import {AppConst} from '../constant/AppConst';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: Http) {
  }

  getDashboardInfo(page:any) {
  const url = AppConst.serverPath +"/dashboardInfo";
	let pubPage = {"currentNum":page,"totalNum":10};
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers, method: "post" });  
	return this.http.post(url,JSON.stringify(pubPage),options);
  }

}

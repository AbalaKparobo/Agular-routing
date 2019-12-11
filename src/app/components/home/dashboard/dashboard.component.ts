import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userInfo: object;

  constructor(public authSevice: AuthService) { }

  ngOnInit() {
    this.userInfo = this.authSevice.getUserData();
  }

}

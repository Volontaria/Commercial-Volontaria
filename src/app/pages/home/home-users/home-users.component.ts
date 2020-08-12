import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.scss']
})
export class HomeUsersComponent implements OnInit {

  logos = [
    '../../../../assets/images/users/nousrire.png',
    '../../../../assets/images/users/biblioutils.png',
    '../../../../assets/images/users/bocoboco.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

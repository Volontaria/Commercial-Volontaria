import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-features-item',
  templateUrl: './home-features-item.component.html',
  styleUrls: ['./home-features-item.component.scss']
})
export class HomeFeaturesItemComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() icon;

  constructor() { }

  ngOnInit(): void {
  }

}

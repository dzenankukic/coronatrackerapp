import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(config: NgbNavConfig) {
    config.destroyOnHide = false;
    config.roles = false;
   }

  ngOnInit() {
  }

}

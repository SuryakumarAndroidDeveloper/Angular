import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

  incrementButtonCount(){
  this.service.incrementvisitorcount();
  }

}

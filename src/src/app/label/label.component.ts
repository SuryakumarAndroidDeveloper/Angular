import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit{
  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

  incrementLabelCount(){
  this.service.incrementvisitorcount();
  }

}

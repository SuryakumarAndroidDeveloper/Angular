import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name:string |undefined;
  datetoday:string | undefined;
  ngOnInit(): void {
    this.datetoday=new Date().toDateString();
    this.name="suryakumar"

  }

}

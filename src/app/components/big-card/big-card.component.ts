import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
    @Input()
    id:string="0"
    @Input()
    photoCover:string = "";
    @Input()
    cardTitle:string ="";
    @Input()
    cardDescription:string ="";

    isDarkMode:boolean=true;

  constructor(private appService: AppService) {
    this.appService.isDarkMode.subscribe( d =>{this.isDarkMode = d;})   
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  isDarkMode:boolean=true;

  photoCover:string = ""
  contentTitle:string =""
  contentDescription:string = ""
  private id:string | null ="";

  constructor(private route:ActivatedRoute,  private appService: AppService) {
    this.appService.isDarkMode.subscribe( d =>{this.isDarkMode = d;})   
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id= value.get("id")
    )
    
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string| null){

      const result = dataFake.filter(article => article.id.toString() == id)[0]

      if(result){
        this.contentTitle = result.title;
        this.contentDescription=result.description;
        this.photoCover = result.photo
      }
  }

}

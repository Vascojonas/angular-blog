import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','./menu-bar.responsive.component.css']
})
export class MenuBarComponent implements OnInit {
  @Output() newChangeDisplayEvent = new EventEmitter<boolean>();
  isDarkMode:boolean=true;

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private appService: AppService
  ) { }

  ngOnInit(): void {
      this.appService.isDarkMode.subscribe(d=>{this.isDarkMode = d;})
  }

  changeDisplayMode(){
    this.appService.changeDisplayMode()
    this.appService.isDarkMode.subscribe( d =>{this.isDarkMode = d;})

    this.newChangeDisplayEvent.emit(this.isDarkMode)
    this.loadStyle("assets/stylesWhiteMode.css");

  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
  

    let themeLink = this.document.getElementById(
      'displayMode'
    ) as HTMLLinkElement;
    if (themeLink) {
        head.removeChild(themeLink)
    } else {
      const style = this.document.createElement('link');
      style.id = 'displayMode';
      style.rel = 'stylesheet';
      style.type="text/css"
      style.href = `${styleName}`;

      head.appendChild(style);
    }

  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  darkMode=true;
  isDarkMode: BehaviorSubject<boolean>;
  constructor() { 
    this.isDarkMode = new BehaviorSubject<boolean>(this.darkMode);
  }


  changeDisplayMode(){
    this.darkMode = !this.darkMode
    this.isDarkMode.next(this.darkMode)
  }
}

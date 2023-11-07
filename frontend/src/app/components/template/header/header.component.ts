import { AppToggleService } from './../../../coor/appToggle/app-toggle.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private appToggleService: AppToggleService
  ){}

  toggleDrawer(){
  
    
    this.appToggleService.toggle()
  }


  
}

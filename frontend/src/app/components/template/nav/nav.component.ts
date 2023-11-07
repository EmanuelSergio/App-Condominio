import { MatSidenav } from '@angular/material/sidenav';
import { AppToggleService } from './../../../coor/appToggle/app-toggle.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('drawer') drawer: MatSidenav|any 

  
  showFiller = false;

  constructor(
    private appToggleService: AppToggleService 
   ){}

  ngOnInit(): void {
    this.appToggleService.toggleEmiter.subscribe((response: any)=>{
      this.drawer.toggle()
      
    })
  }

}

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppToggleService {

  public toggleEmiter: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  toggle(){
    
    
    return this.toggleEmiter.emit(!this.toggleEmiter)
  }

}

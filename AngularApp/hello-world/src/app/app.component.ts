import { Component } from '@angular/core';
import {
  NgZone  
} from '@angular/core'; 
import {  SignalRService  } from './signal/signal-r.service'; 
//import { Notification } from 'rxjs/internal/Notification';
import {Notification} from './models/notification.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isConnected: Boolean;
  notifications: string[] = [];
  message:string;

  constructor(private _signalRService: SignalRService, private ngZone: NgZone) 
  {
    this.isConnected = false;  
  }

  ngOnInit() 
  {
    this.checkConnection();
    this.subscribeForNotifications();
  }

  private checkConnection(){
    this._signalRService.connectionEstablished.subscribe(e => {this.isConnected = e; 
        if (e) {
          this._signalRService.sendHello()
        }
    });
  }

  private subscribeForNotifications () {
    this._signalRService.notificationReceived.subscribe(e => this.onNotification(e));
  }

  public onNotification(notif: Notification) {
    
         this.ngZone.run(() => { 
           debugger;
           if(localStorage.role == 'Admin'){
             alert(notif.Text);
           }
        });  
  }
 
  logout()
  {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
  }

  public localStorageJWT(): string {
    return localStorage.jwt;
  }

  public showAddType(): boolean {
    return localStorage.role == 'Admin';
  }

  public showUser(): boolean {
    return localStorage.role == 'AppUser';
  }
}

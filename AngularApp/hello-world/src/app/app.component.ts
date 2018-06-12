import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {}

  ngOnInit() {
  }
 
  logout()
  {
    localStorage.clear();
  }

  public localStorageJWT(): string {
    return localStorage.jwt;
  }

  public showAddType(): boolean {
    return localStorage.role == 'Admin';
  }

  public showProfile(): boolean {
    return localStorage.role == 'AppUser';
  }

}

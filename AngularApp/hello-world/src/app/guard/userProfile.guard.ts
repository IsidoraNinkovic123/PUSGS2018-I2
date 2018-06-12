import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class UserProfileGuard implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'AppUser';
  }
}
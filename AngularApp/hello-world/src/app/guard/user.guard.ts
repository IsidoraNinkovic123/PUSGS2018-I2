import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'AppUser';
  }
}
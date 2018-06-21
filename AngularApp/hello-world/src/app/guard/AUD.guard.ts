import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AUDGuard implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'Manager' || localStorage.role == 'Admin';
  }
}
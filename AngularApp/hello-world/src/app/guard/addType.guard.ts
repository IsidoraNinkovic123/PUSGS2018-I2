import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AddTypeGuard implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'Admin';
  }
}
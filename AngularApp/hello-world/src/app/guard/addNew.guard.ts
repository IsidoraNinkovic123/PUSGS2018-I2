import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AddNewGuard implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'Manager';
  }
}
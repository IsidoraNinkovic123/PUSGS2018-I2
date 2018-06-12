import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/login.interceptor';

import { AppComponent } from './app.component';
import { AddServiceComponent } from './addEntity/addService/addService.component';
import { AddBranchComponent } from './addEntity/add-branch/add-branch.component';
import { AddVehicleComponent } from './addEntity/add-vehicle/add-vehicle.component';
import { AddTypeComponent } from './addEntity/add-type/add-type.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './addEntity/registration/registration.component';
import { ShowServicesComponent } from './showEntities/show-services/show-services.component';
import { ProfileComponent } from './profile/profile.component';
import { OneServiceComponent } from './showEntities/one-service/one-service.component';
import { ClockComponent } from './time/time.component';
import { UserProfileGuard } from './guard/userProfile.guard';
import { AddNewGuard } from './guard/addNew.guard';
import { AddTypeGuard } from './guard/addType.guard';
import { OneBranchComponent } from './showEntities/one-branch/one-branch.component';


const Routes = [
  {
    path: "home",
    component: ShowServicesComponent
  },
  {
    path: "addService",
    component: AddServiceComponent,
    canActivate: [AddNewGuard]
  },
  {
    path: "addBranch/:Id",
    component: AddBranchComponent,
    canActivate: [AddNewGuard]
  },
  {
    path: "addVehicle",
    component: AddVehicleComponent,
    canActivate: [AddNewGuard]
  },
  {
    path: "addType",
    component: AddTypeComponent,
    canActivate: [AddTypeGuard]
  },
  {
    path: "branch/:Id",
    component: OneServiceComponent
  },
  {
    path: "logIn",
    component: LogInComponent
  },
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [UserProfileGuard]
  },
  {
    path: "service/:Id",
    component: OneServiceComponent
  },
  {
    path: "other",
    redirectTo: "home"
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AddServiceComponent,
    AddBranchComponent,
    AddVehicleComponent,
    AddTypeComponent,
    LogInComponent,
    RegistrationComponent,
    ShowServicesComponent,
    ProfileComponent,
    OneServiceComponent,
    ClockComponent,
    OneBranchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [
    UserProfileGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'CanAlwaysActivateGuard',
      useValue: () => {
        return true;
      } 
    }    
  ], //mogu staviti sta mi treba u celoj aplikaciji
  bootstrap: [AppComponent]
})

export class AppModule { }

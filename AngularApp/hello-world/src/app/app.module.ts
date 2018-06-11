import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

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

const Routes = [
  {
    path: "home",
    component: ShowServicesComponent
  },
  {
    path: "addService",
    component: AddServiceComponent,
  },
  {
    path: "addBranch/:Id",
    component: AddBranchComponent
  },
  {
    path: "addVehicle",
    component: AddVehicleComponent
  },
  {
    path: "addType",
    component: AddTypeComponent
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
    component: ProfileComponent
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
    ClockComponent
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
  providers: [], //mogu staviti sta mi treba u celoj aplikaciji
  bootstrap: [AppComponent]
})

export class AppModule { }

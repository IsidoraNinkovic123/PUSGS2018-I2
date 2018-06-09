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

const Routes = [
  {
    path: "AddService",
    component: AddServiceComponent,
  },
  {
    path: "AddBranch",
    component: AddBranchComponent
  },
  {
    path: "AddVehicle",
    component: AddVehicleComponent
  },
  {
    path: "AddType",
    component: AddTypeComponent
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
    ShowServicesComponent
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
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

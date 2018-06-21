import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/login.interceptor';

import { FileSelectDirective } from 'ng2-file-upload';
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
import { UserGuard } from './guard/user.guard';
import { AUDGuard } from './guard/AUD.guard';
import { AdminGuard } from './guard/admin.guard';
import { OneBranchComponent } from './showEntities/one-branch/one-branch.component';
import { UpdateServiceComponent } from './updateEntity/update-service/update-service.component';
import { UpdateBranchComponent } from './updateEntity/update-branch/update-branch.component';
import { UpdateVehicleComponent } from './updateEntity/update-vehicle/update-vehicle.component';
import { AddRentComponent } from './addEntity/add-rent/add-rent.component';
import { SearchComponent } from './search/search.component';
import { ShowBranchesComponent } from './showEntities/show-branches/show-branches.component';
import { AgmCoreModule } from '@agm/core';
import { SignalRService } from './signal/signal-r.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserRentsComponent } from './user-rents/user-rents.component';  



const Routes = [
  {
    path: "home",
    component: ShowServicesComponent
  },
  {
    path: "notifications",
    component: NotificationsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "branches/:Id",
    component: ShowBranchesComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "rents",
    component: UserRentsComponent,
    canActivate: [UserGuard]
  },
  {
    path: "addService",
    component: AddServiceComponent,
    canActivate: [AUDGuard]
  },
  {
    path: "addBranch/:Id",
    component: AddBranchComponent,
    canActivate: [AUDGuard]
  },
  {
    path: "addVehicle/:Id",
    component: AddVehicleComponent,
    canActivate: [AUDGuard]
  },
  {
    path: "addType",
    component: AddTypeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "branch/:Id",
    component: OneBranchComponent
  },
  {
    path: "vehicle/:Id",
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
    canActivate: [UserGuard]
  },
  {
    path: "service/:Id",
    component: OneServiceComponent
  },
  {
    path: "updateService/:Id",
    component: UpdateServiceComponent,
    canActivate: [AUDGuard]
  },
  {
    path: "updateBranch/:Id",
    component: UpdateBranchComponent,
    canActivate: [AUDGuard]
  },
  {
    path: "updateVehicle/:Id",
    component: UpdateVehicleComponent,
    canActivate: [AUDGuard]
  },
  {
    path: "rent/:vehicleId/:serviceId",
    component: AddRentComponent,
    canActivate: [UserGuard]
  },
  {
    path: "other",
    redirectTo: "home"
  }

]

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    AddServiceComponent,
    AddBranchComponent,
    AddVehicleComponent,
    AddTypeComponent,
    LogInComponent,
    RegistrationComponent,
    ShowServicesComponent,
    ProfileComponent,
    OneServiceComponent,
    OneBranchComponent,
    UpdateServiceComponent,
    UpdateBranchComponent,
    UpdateVehicleComponent,
    AddRentComponent,
    SearchComponent,
    ShowBranchesComponent,
    NotificationsComponent,
    UserRentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk'})
    
  ],
  providers: [
    UserGuard,
    AUDGuard,
    AdminGuard,
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
    },
    SignalRService
  ], 
  bootstrap: [AppComponent]
})

export class AppModule { }

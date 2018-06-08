import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';

const Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent
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

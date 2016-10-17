import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureFieldComponent } from './signature-field/signature-field.component';
import { ViewedComponent } from './viewed.component';
import { SignComponent } from './sign.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SignaturePadModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SignatureFieldComponent,
    ViewedComponent,
    SignComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MaterialLibModule } from './../../projects/material-lib/src/lib/material-lib.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

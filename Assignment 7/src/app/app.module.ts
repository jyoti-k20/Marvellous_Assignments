import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SecoundcompComponent } from './secoundcomp/secoundcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    SecoundcompComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

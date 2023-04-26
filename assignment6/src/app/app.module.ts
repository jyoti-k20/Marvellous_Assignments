import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NewcopmComponent } from './newcopm/newcopm.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NewcopmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

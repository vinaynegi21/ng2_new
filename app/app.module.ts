import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { App2Component }  from './app2.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,App2Component ],
  bootstrap:    [ AppComponent,App2Component ]
})
export class AppModule { }
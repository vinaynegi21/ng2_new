import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { App2Component }  from './app2.component';
import {FormsModule} from '@angular/forms';
import {ProductService} from './product.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpClientModule ],
  declarations: [ AppComponent,App2Component ],
  providers:[ProductService],
  bootstrap:    [ AppComponent,App2Component ]
})
export class AppModule { }
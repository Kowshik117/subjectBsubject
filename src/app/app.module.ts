import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,

    OneComponent,
    TwoComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './pages/client/client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './pages/test/test.component';
import { ViewgspComponent } from './pages/viewgsp/viewgsp.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { Viewgsp2Component } from './pages/viewgsp2/viewgsp2.component';
import { Viewgspform2Component } from './components/viewgspform2/viewgspform2.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavbarComponent,
    TestComponent,
    ViewgspComponent,
    TextInputComponent,
    TextAreaComponent,
    SelectInputComponent,
    Viewgsp2Component,
    Viewgspform2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

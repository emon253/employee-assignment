import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './pages/client/client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './pages/test/test.component';
import { ViewgspComponent } from './pages/viewgsp/viewgsp.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavbarComponent,
    TestComponent,
    ViewgspComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

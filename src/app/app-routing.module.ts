import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { TestComponent } from './pages/test/test.component';
import { ViewgspComponent } from './pages/viewgsp/viewgsp.component';
import { Viewgsp2Component } from './pages/viewgsp2/viewgsp2.component';

const routes: Routes = [

  {
    path: '',
    component: ClientComponent,
    pathMatch:'full'
  },
  {
    path: 'view-gsp',
    component: ViewgspComponent,
    pathMatch:'full'
  },
  {
    path: 'view-gsp2',
    component: Viewgsp2Component,
    pathMatch:'full'
  },
  {
    path: 'test',
    component: TestComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

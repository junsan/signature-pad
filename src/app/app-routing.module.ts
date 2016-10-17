import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewedComponent } from './viewed.component';
import { SignComponent }   from './sign.component';

const routes: Routes = [
  { path: 'sign',  component: SignComponent },
  { path: 'viewed/:id/:name',  component: ViewedComponent },
  { path: '', component: SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { MainPageComponent } from './main-page/main-page.component';
import { AddPageComponent } from './add-page/add-page.component';

const routes: Routes = [
  {path:'',component: MainPageComponent},
  {path:'add', component: AddPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

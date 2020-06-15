import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartsComponent } from './modules/home/parts/parts.component';


const routes: Routes = [
  { path: 'home', component: PartsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

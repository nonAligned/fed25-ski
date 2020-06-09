import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResortComponent } from './ski/resort/resort.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "skiresorts/:id", component: ResortComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

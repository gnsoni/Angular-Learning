import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "module", component: ModuleComponent},
  {path: "counter", component: CounterComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

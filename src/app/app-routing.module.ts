import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CurrencyWidgetComponent} from './components/currency-widget/currency-widget.component';
import {StartComponent} from './components/start/start.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: StartComponent },
      { path: 'currencies', component: CurrencyWidgetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

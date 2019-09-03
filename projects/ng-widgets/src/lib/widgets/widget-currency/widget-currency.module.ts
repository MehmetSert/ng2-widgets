import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetCurrencyComponent } from './widget-currency.component';



@NgModule({
  declarations: [WidgetCurrencyComponent],
  imports: [
    CommonModule
  ],
  exports: [WidgetCurrencyComponent]
})
export class WidgetCurrencyModule { }

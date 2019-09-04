import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-currency',
  templateUrl: './widget-currency.component.html',
  styleUrls: ['./widget-currency.component.scss']
})
export class WidgetCurrencyComponent implements OnInit {

  @Input() customClass: string;
  @Input() status: boolean;
  @Input() currencyIcon: string; // required
  @Input() currencyTitle: string; // required
  @Input() currencyValue: number; // required
  @Input() currencyPercent: number;

  @Input() bgColor: string = '#e8e9c9';
  @Input() textColor: string = '#3e3e3c';
  @Input() iconBgColor: string = '#44524b';
  @Input() iconColor: string = '#ffffff';
  @Input() currencyTitleColor: string = '#44524b';
  @Input() borderBottomWidth: string = '3px';
  @Input() borderBottomColor: string = '#9da09f';

  constructor() { }

  ngOnInit() {
  }

}

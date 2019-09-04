import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-currency-widget',
  templateUrl: './currency-widget.component.html',
  styleUrls: ['./currency-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CurrencyWidgetComponent implements OnInit {

  moduleImport = `import {WidgetCurrencyModule} from 'ng2-widgets/widgets/widget-currency';

@NgModule({
  imports: [
    WidgetCurrencyModule
  ]
})
`;

  basicHtml = `<div style="width: 200px">
  <widget-currency
    [status]="true"
    [currencyIcon]="'fas fa-dollar-sign'"
    [currencyTitle]="'Dolar'"
    [currencyValue]="5.85"
    [currencyPercent]="'0.21'"
    [iconBgColor]="'#85bb65'"
    [iconColor]="'#34343c'"
    [borderBottomColor]="'#85bb65'"></widget-currency>
</div>
`;

  horizontalHtml = `<div class="currency-horizontal">
  <div class="currency-item">
    <widget-currency
      [status]="true"
      [currencyIcon]="'fas fa-dollar-sign'"
      [currencyTitle]="'Dolar'"
      [currencyValue]="5.85"
      [currencyPercent]="'0.21'"
      [iconBgColor]="'#85bb65'"
      [iconColor]="'#34343c'"
      [borderBottomColor]="'#85bb65'"></widget-currency>
  </div>

  <div class="currency-item">
    <widget-currency
      [status]="false"
      [currencyIcon]="'fas fa-euro-sign'"
      [currencyTitle]="'Euro'"
      [currencyValue]="6.32"
      [currencyPercent]="'-0.34'"
      [iconBgColor]="'#f58724'"
      [iconColor]="'#34343c'"
      [borderBottomColor]="'#f58724'"></widget-currency>
  </div>

  <div class="currency-item">
    <widget-currency
      [status]="false"
      [currencyIcon]="'fas fa-coins'"
      [currencyTitle]="'Altın'"
      [currencyValue]="284.65"
      [currencyPercent]="'-0.31'"
      [iconBgColor]="'#f9a602'"
      [iconColor]="'#34343c'"
      [borderBottomColor]="'#f9a602'"></widget-currency>
  </div>
</div>
`;

  horizontalScss = `.currency-horizontal {
  display: flex;
  .currency-item {
    width: 200px;
  }
}
`;

  verticalHtml = `<div class="currency-vertical">
  <div class="currency-item">
    <widget-currency
      [status]="true"
      [currencyIcon]="'fas fa-dollar-sign'"
      [currencyTitle]="'Dolar'"
      [currencyValue]="5.85"
      [currencyPercent]="'0.21'"
      [iconBgColor]="'#85bb65'"
      [iconColor]="'#34343c'"
      [borderBottomColor]="'#85bb65'"></widget-currency>
  </div>

  <div class="currency-item">
    <widget-currency
      [status]="false"
      [currencyIcon]="'fas fa-euro-sign'"
      [currencyTitle]="'Euro'"
      [currencyValue]="6.32"
      [currencyPercent]="'-0.34'"
      [iconBgColor]="'#f58724'"
      [iconColor]="'#34343c'"
      [borderBottomColor]="'#f58724'"></widget-currency>
  </div>

  <div class="currency-item">
    <widget-currency
      [status]="false"
      [currencyIcon]="'fas fa-coins'"
      [currencyTitle]="'Altın'"
      [currencyValue]="284.65"
      [currencyPercent]="'-0.31'"
      [iconBgColor]="'#f9a602'"
      [iconColor]="'#34343c'"
      [borderBottomColor]="'#f9a602'"></widget-currency>
  </div>
</div>
`;

  verticalScss = `.currency-vertical {
  display: block;
  .currency-item {
    display: block;
    width: 200px;
  }
}
`;

  customHtml = `<div class="custom-demo">
  <widget-currency
    [status]="true"
    [currencyIcon]="'fas fa-dollar-sign'"
    [currencyTitle]="'Dolar'"
    [currencyValue]="5.85"
    [currencyPercent]="'0.21'"
    [iconBgColor]="'#85bb65'"
    [iconColor]="'#34343c'"
    [borderBottomColor]="'#85bb65'"
    [bgColor]="'rgba(133, 187, 101, 0.5)'"
    [customClass]="'custom-currency'"></widget-currency>
    
  <widget-currency
    [status]="false"
    [currencyIcon]="'fas fa-euro-sign'"
    [currencyTitle]="'Euro'"
    [currencyValue]="6.32"
    [currencyPercent]="'-0.34'"
    [iconBgColor]="'#f58724'"
    [iconColor]="'#34343c'"
    [borderBottomColor]="'#f58724'"
    [bgColor]="'rgba(245, 135, 36, 0.4)'"
    [customClass]="'custom-currency'"></widget-currency>
    
  <widget-currency
    [status]="false"
    [currencyIcon]="'fas fa-coins'"
    [currencyTitle]="'Altın'"
    [currencyValue]="284.65"
    [currencyPercent]="'-0.31'"
    [iconBgColor]="'#f9a602'"
    [iconColor]="'#34343c'"
    [borderBottomColor]="'#f9a602'"
    [bgColor]="'rgba(249, 166, 2, 0.4)'"
    [customClass]="'custom-currency'"></widget-currency>
</div>
`;

  customScss = `.custom-demo {
  display: flex;
  widget-currency {
    width: 100%;
    margin: 5px;
    .custom-currency {
      padding: 20px;
      box-shadow: 0 7px 10px 0 rgba(59, 64, 69, 0.2);
      border-bottom: none;
    }
  }
}
`;

  constructor() { }

  ngOnInit() {
  }

}

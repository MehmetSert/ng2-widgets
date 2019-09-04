import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  npmInstall = `npm install --save ng-widgets`;

  step1 = `import {WidgetCurrencyModule} from 'ng-widgets/currency';

@NgModule({
  imports: [
    WidgetCurrencyModule
  ]
})
`;

  constructor() { }

  ngOnInit() {
  }

}

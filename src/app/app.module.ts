import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WidgetCurrencyModule} from '../../projects/ng2-widgets/src/lib/widgets/widget-currency/widget-currency.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CurrencyWidgetComponent } from './components/currency-widget/currency-widget.component';
import { StartComponent } from './components/start/start.component';
import {MatCardModule, MatTabsModule} from '@angular/material';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import {HttpClientModule} from '@angular/common/http';
import {TranslateService} from './services/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyWidgetComponent,
    StartComponent,
    SafeHtmlPipe,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetCurrencyModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

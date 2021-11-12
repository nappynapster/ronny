import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TerraComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

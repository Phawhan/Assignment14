import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { NameComponent } from './app/header/name/name.component';
import { BodyComponent } from './app/body/body.component';
import { TableComponent } from './app/body/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NameComponent,
    BodyComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

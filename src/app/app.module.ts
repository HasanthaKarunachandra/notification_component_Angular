import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { ScrollComponent } from './Components/scroll/scroll.component';



@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeServerService } from './services/fake-server/fake-server.service';
import { MatButtonModule } from '@angular/material/button';
import { A11yModule } from '@angular/cdk/a11y';
import { MatListModule } from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { PhonePipe } from './pipes/phone.pipe';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core'
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    PhonePipe,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      FakeServerService, { dataEncapsulation: false }
    ),
    MatButtonModule,
    A11yModule,
    MatListModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

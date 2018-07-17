import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactRowComponent } from './contact-row/contact-row.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import {FormsModule} from '@angular/forms';
import {ContactService} from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactRowComponent,
    ContactFormComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

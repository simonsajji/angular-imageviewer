import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageContainerComponent } from './image-container/image-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent
  ],
  imports: [
   [BrowserModule,FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PianoViewComponent } from './pages/piano-view/piano-view.component';
import { PianoComponent } from './piano/piano.component';

@NgModule({
  declarations: [
    AppComponent,
    PianoViewComponent,
    PianoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

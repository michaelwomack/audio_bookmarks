import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { HeaderComponent } from './components/header/header.component';
import { AudioCardComponent } from './components/audio-card/audio-card.component';
import { LibraryTabComponent } from './components/library-tab/library-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    HeaderComponent,
    AudioCardComponent,
    LibraryTabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

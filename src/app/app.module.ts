import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayPipe } from './display.pipe';
import { LoginComponent } from './login/login.component';
import { TwbindComponent } from './twbind/twbind.component';
import { PipesComponent } from './pipes/pipes.component';
import { TagcolorComponent } from './tagcolor/tagcolor.component';
import { ApphighlighterDirective } from './apphighlighter.directive';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPipe,
    LoginComponent,
    TwbindComponent,
    PipesComponent,
    TagcolorComponent,
    ApphighlighterDirective,
    ButtonComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

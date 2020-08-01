import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterMakerComponent } from './character-maker/character-maker.component';
import { FormsModule } from '@angular/forms';
import { DieRollerComponent } from './character-maker/die-roller/die-roller.component';
import { NotesComponent } from './character-maker/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterMakerComponent,
    DieRollerComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

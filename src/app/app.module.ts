import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';
import { MemorygameComponent } from './memorygame/memorygame.component';
import { EigenappComponent } from './eigenapp/eigenapp.component';
import { ColorPatchComponent } from './colorpatches/color-patch/color-patch.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorpatchesComponent,
    MemorygameComponent,
    EigenappComponent,
    ColorPatchComponent
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
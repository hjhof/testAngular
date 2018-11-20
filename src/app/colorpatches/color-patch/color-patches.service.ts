import { Injectable } from '@angular/core';
import { ColorPatch } from './color-patch.class';

@Injectable({
  providedIn: 'root'
})
export class ColorPatchesService {
  currentPatch  = new ColorPatch (0, 0, 0, 1, 'black');
  currentPatch1 = new ColorPatch (255, 0, 0, 1, 'red');
  currentPatch2 = new ColorPatch (0, 255, 0, 1, 'green');
  currentPatch3 = new ColorPatch (0, 0, 255, 1, 'blue');

  colorPatchArray = [this.currentPatch, this.currentPatch1, this.currentPatch2, this.currentPatch3];

  getColorPatchArray() {
    return this.colorPatchArray;
  }
  constructor() {}
}

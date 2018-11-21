import { Component, OnInit } from '@angular/core';
import * as colorPatch from './color-patch/color-patch.class';
import { ColorPatchesService } from '../colorpatches/color-patch/color-patches.service';

@Component({
  selector: 'app-colorpatches',
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css']
})
export class ColorpatchesComponent implements OnInit {

  private myName: String = 'Mark';
    currentPatch: colorPatch.ColorPatch;
    colorPatchArray = [];
    untouched = true;

  constructor(private colorPatchesService: ColorPatchesService) {

  }

  ngOnInit() {
    this.colorPatchesService.getColorPatchArray()
      .subscribe(data => this.colorPatchArray = data);
      this.currentPatch = this.colorPatchesService.colorPatchArray[0];
  }

  setActivePatch(e) {
    this.currentPatch = e;
  }

  onChangeSliders(event) {
    this.currentPatch.generateRgbValue();
    this.untouched = false;
  }

  storePatches() {
    this.colorPatchesService.storePatches(this.colorPatchArray);
    this.untouched = false;
  }

  addPatch() {
    this.colorPatchesService.addColorPatch();
  }
}

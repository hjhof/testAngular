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

  constructor(private colorPatchesService: ColorPatchesService) {

    this.colorPatchArray = this.colorPatchesService.getColorPatchArray();
    this.currentPatch = this.colorPatchArray[0];
  }

  ngOnInit() {
  }
  setActivePatch(e) {
    this.currentPatch = e;
  }

  onChangeSliders(event) {
    this.currentPatch.generateRgbValue();
  }

}

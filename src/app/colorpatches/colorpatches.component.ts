import { Component, OnInit } from '@angular/core';
import { ColorPatch } from '../models/color-patch';
import { ColorPatchesService } from '../services/color-patches.service';

@Component({
  selector: 'app-colorpatches',
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css']
})
export class ColorpatchesComponent implements OnInit {

  private myName: String = 'Mark';
    currentPatch: ColorPatch;
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

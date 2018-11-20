import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { createInput } from '@angular/compiler/src/core';
import { ColorPatch } from 'src/app/models/color-patch';


@Component({
  selector: 'app-color-patch',
  templateUrl: './color-patch.component.html',
  styleUrls: ['./color-patch.component.css']
})
export class ColorPatchComponent implements OnInit {

  @Input() inPatch: ColorPatch;
  @Output() selectPatch = new EventEmitter();

  onSelectPatch() {
    this.selectPatch.emit(this.inPatch);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { ColorPatch } from './color-patch.class';
import { IColorPatch } from './color-patch.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ColorPatchesService {

  private _url = '/assets/data/colorpatches.json';
  currentPatch  = new ColorPatch (0, 0, 0, 1, 'black');
  currentPatch1 = new ColorPatch (255, 0, 0, 1, 'red');
  currentPatch2 = new ColorPatch (0, 255, 0, 1, 'green');
  currentPatch3 = new ColorPatch (0, 0, 255, 1, 'blue');

  colorPatchArray = [this.currentPatch, this.currentPatch1, this.currentPatch2, this.currentPatch3];

  getColorPatchArray(): Observable<IColorPatch[]> {
    return this.http.get<IColorPatch[]>(this._url).pipe(map(data => this.reviveColorPatches(data)));
  }

  reviveColorPatches(myArry) {
    // const patchArray: ColorPatch[] = [];
    myArry.forEach(element => {
      const newColorPatch = new ColorPatch(element.r, element.g, element.b, element.a, element.name);
      this.colorPatchArray.push(newColorPatch);
    });
    return this.colorPatchArray;
  }

  getColorPatchArray2() {
    if (window.localStorage.getItem('colorpatches')) {
      const patchesJson = JSON.parse (window.localStorage.getItem('colorpatches'));
      this.colorPatchArray = [];
      patchesJson.forEach(element => {
        const newColorPatch = new ColorPatch(element.r, element.g, element.b, element.a, element.name);
        this.colorPatchArray.push(newColorPatch);
      });
    }
    return this.colorPatchArray;
  }

  storePatches(patches) {
    window.localStorage.setItem('colorpatches', JSON.stringify(patches));
  }

  addColorPatch() {
    const newColorPatch = new ColorPatch (0, 0, 0, 1, 'black');
    this.colorPatchArray.push(newColorPatch);
    return this.colorPatchArray;
  }

  constructor(private http: HttpClient) {}
}

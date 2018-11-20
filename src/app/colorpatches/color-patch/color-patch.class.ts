import {IColorPatch} from './color-patch.interface';

export class ColorPatch implements IColorPatch {
    r: number;
    g: number;
    b: number;
    a: number;
    rgba: string;
    name: string;
    textcolor: string;

    generateRgbValue() {
      this.rgba =  `rgba(${this.r},${this.g},${this.b},${this.a})`;
      this.textcolor = `rgba(${Math.max(0, 200 - this.r)},${Math.max(0, 200 - this.g)},${Math.max(0, 200 - this.b)},1)`;
    }

 constructor (r: number, g: number, b: number, a: number, name: string) {
     this.r = r;
     this.g = g;
     this.b = b;
     this.a = a;
     this.name = name;

     this.generateRgbValue();
 }
}

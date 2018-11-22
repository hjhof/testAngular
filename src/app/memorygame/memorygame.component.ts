import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-memorygame',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.css']
})
export class MemorygameComponent implements OnInit {
  myForm = new FormGroup({
    name : new FormControl(''),
    btw : new FormControl(''),
    btwTarief : new FormControl('9')
  });

  chooseTax() {
    this.myForm.controls['btwTarief'].setValue('21');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

  constructor() {}

  ngOnInit() {}
}

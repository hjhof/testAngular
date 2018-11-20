import { TestBed } from '@angular/core/testing';

import { ColorPatchesService } from './color-patches.service';

describe('ColorPatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorPatchesService = TestBed.get(ColorPatchesService);
    expect(service).toBeTruthy();
  });
});

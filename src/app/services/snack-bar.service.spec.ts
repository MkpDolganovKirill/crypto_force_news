import { TestBed } from '@angular/core/testing';

import { SnackBarService } from './snack-bar.service';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

describe('SnackBarService', () => {
  let service: SnackBarService;
  let fakeSnackBar: MatSnackBar;
  beforeAll(() => {
    fakeSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [SnackBarService, { provide: MatSnackBar, useValue: fakeSnackBar }]
    });
    service = TestBed.inject(SnackBarService);
  });

  it('was created', () => {
    expect(service).toBeTruthy();
  });

  it('show snack bar', () => {
    service.openSnackBar('test', 'test',);
    expect(fakeSnackBar.open).toHaveBeenCalledWith('test', 'test', {
      duration: 4000,
    });
  })
});

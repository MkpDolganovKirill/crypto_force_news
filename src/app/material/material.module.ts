import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [
  MatTableModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule {}

///<reference path="../dev-mode-types.d.ts"/>

import { NgModule } from '@angular/core';
import { MaterialLibComponent } from './material-lib.component';
import { MatInput } from './input/input';
import { MatInputModule } from './input/input-module';
import { MatFormField, MatLabel, MatFormFieldModule } from './form-field';


@NgModule({
  declarations: [MaterialLibComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MaterialLibComponent,
    MatInput,
    MatFormField,
    MatLabel
  ]
})
export class MaterialLibModule { }

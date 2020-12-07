///<reference path="../dev-mode-types.d.ts"/>

import { NgModule } from '@angular/core';
import { MaterialLibComponent } from './material-lib.component';
import { MatInput } from './input/input';
import { MatInputModule } from './input/input.module';
import { MatFormFieldModule } from './form-field';
import { MatFormField } from './form-field/form-field';


@NgModule({
  declarations: [MaterialLibComponent],
  imports: [
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MaterialLibComponent,
    MatInput,
    MatFormField
  ]
})
export class MaterialLibModule { }

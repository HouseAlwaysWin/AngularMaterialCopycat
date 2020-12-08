///<reference path="../dev-mode-types.d.ts"/>

import { NgModule } from '@angular/core';
import { MatInput } from './input/input';
import { MatInputModule } from './input/input-module';
import { MatFormField, MatLabel, MatFormFieldModule } from './form-field';
import { MatListModule } from './list/list-module';
import { MatList, MatListItem } from './list';


@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatListModule
  ],
  exports: [
    MatInput,
    MatFormField,
    MatLabel,
    MatList,
    MatListItem
  ]
})
export class MaterialLibModule { }

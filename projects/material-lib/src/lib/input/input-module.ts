/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TextFieldModule } from '../cdk/text-field';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher, MatCommonModule } from '../core';
import { MatFormFieldModule } from '../form-field';
import { MatTextareaAutosize } from './autosize';
import { MatInput } from './input';

@NgModule({
  declarations: [MatInput, MatTextareaAutosize],
  imports: [
    TextFieldModule,
    MatFormFieldModule,
    MatCommonModule,
  ],
  exports: [
    TextFieldModule,
    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
    // be used together with `MatFormField`.
    MatFormFieldModule,
    MatInput,
    MatTextareaAutosize,
  ],
  providers: [ErrorStateMatcher],
})
export class MatInputModule { }

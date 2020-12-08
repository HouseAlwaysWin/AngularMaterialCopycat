
import { NgModule } from '@angular/core';
import { PlatformModule } from '../../cdk/platform';
import { MatCommonModule } from '../common-behaviors/common-module';
import { MatRipple } from './ripple';


@NgModule({
    imports: [MatCommonModule, PlatformModule],
    exports: [MatRipple, MatCommonModule],
    declarations: [MatRipple],
})
export class MatRippleModule { }

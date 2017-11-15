import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2TelInput } from './ng2-intl-tel-input';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [Ng2TelInput],
    exports: [Ng2TelInput]
})
export class Ng2TelInputModule { }

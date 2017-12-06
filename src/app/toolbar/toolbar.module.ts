import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        // ToolbarComponent,
        SharedModule
    ],
    declarations: [ToolbarComponent],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {
}

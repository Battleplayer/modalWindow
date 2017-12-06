import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule
    ],
    declarations: [],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule
    ]
})
export class MatModule {
}

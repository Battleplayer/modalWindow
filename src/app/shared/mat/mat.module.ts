import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    // MatDialog,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule
        // MatDialog
    ],
    declarations: [],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        // MatDialog
    ]
})
export class MatModule {
}

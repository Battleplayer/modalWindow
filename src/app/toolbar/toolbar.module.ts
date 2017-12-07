import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar.component';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ToolbarComponent, LoginComponent],
    exports: [
        ToolbarComponent,
        LoginComponent
    ],
    entryComponents: [LoginComponent]
})
export class ToolbarModule {
}

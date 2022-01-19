import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { EnumDisplayPipe } from './enum-display/enum-display.pipe';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ResultTableComponent } from './result-table/result-table.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    SpinnerComponent,
    EnumDisplayPipe,
    ResultTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnumDisplayPipe,
    SpinnerComponent,
    SvgIconComponent,
    ResultTableComponent
  ]
})
export class MuziehComponentsModule { }
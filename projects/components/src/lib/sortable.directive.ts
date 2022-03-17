import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[mzSortable]'
})
export class SortableDirective {

  @Input('mzSortable') mzSortable!: string;
  @Output() sort = new EventEmitter<string>();

  constructor() { 
  }
}

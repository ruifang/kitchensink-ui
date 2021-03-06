import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PageEvent } from '../models/page-event';
import { ResultTableOptions } from '../models/result-table-options';
import { ResultTableModel } from './result-table.model';

@Component({
    selector: 'mz-result-table',
    templateUrl: './result-table.component.html',
    styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent {
    @Input() public loading: boolean = false;
    @Input() public error?: Error;
    @Input() public model: ResultTableModel<any> | undefined | null; // TODO need to deal with the flaw of angular's async pipe
    @Input() public header!: TemplateRef<any>;
    @Input() public body!: TemplateRef<any>;
    @Input() public options: ResultTableOptions = { hidePagination: false };
    @Output() public pageChange = new EventEmitter<PageEvent>();

    constructor() {}

    changePage(page: PageEvent, table: HTMLElement) {
        this.pageChange.emit(page);
        setTimeout(() => {
            table.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    searchAgain() {
        this.pageChange.emit({ page: this.model?.page || 1, pageSize: this.model?.pageSize || 20 }); // TODO
    }

    public get state(): 'loading' | 'failed' | 'succeeded' {
        if (this.loading) {
            return 'loading';
        }
        if (this.error) {
            return 'failed';
        }

        return 'succeeded';
    }
}

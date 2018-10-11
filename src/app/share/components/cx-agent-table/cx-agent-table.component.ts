import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as model from '../../model/index';

@Component({
	selector: 'benniao-cx-agent-table',
	templateUrl: './cx-agent-table.component.html',
	styleUrls: ['./cx-agent-table.component.scss']
})
export class CxAgentTableComponent implements OnInit {

	@Input() tableConfig: Array<model.tableConfig>;
	@Input() tableData: any[];
	@Output() tableRowClick: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() {

	}

	rowClick(item) {
		this.tableRowClick.emit(item);
	}



}

import { Component } from '@angular/core';
import * as model from './share/model/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic-frame';
  focus1: boolean = true;
  focus2: boolean = false;
  userName: string = "abc";
  password: string = "";
  
  tableConfig: model.tableConfig[] = [
    {field: 'pNumber', headerName: 'Passenger number', className: 'col-2'},
    {field: 'pName', headerName: 'Passenger name', className: 'col-10'},
  ];

  tableData = [
    {pNumber: 'P1', pName: 'AU YEUNG/TUNG YI RITA MS'},
    {pNumber: 'P2', pName: 'FU/CHEUK KEI FREDERICK MR'},
    {pNumber: 'P3', pName: 'LI/PUI HANG MS'},
  ];
  curItemNumber: string;

  rowClick(item) {
    this.curItemNumber = item.pNumber;
  }

  changeFocus() {
    this.focus1 = !this.focus1;
    this.focus2 = !this.focus2;
  }
}

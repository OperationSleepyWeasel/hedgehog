import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Tradition } from '../model/tradition.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'hh-list',
  templateUrl: './traditions-list.component.html',
  styleUrls: ['./traditions-list.component.css']
})
export class TraditionsListComponent implements OnChanges {

  @Input()
  traditions: Tradition[];

  dataSource: MatTableDataSource<Tradition>;

  displayedColumns = ['name', 'description'];

  constructor() { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Tradition>(this.traditions);
  }

}

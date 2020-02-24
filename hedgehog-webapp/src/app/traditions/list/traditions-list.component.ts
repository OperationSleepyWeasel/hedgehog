import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
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

  @Output() selectedTradition: EventEmitter<Tradition>;

  dataSource: MatTableDataSource<Tradition>;

  displayedColumns = ['name', 'description', 'actions'];

  constructor() { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Tradition>(this.traditions);
  }

  goToDetails(tradition: Tradition) {
    this.selectedTradition.emit(tradition);
  }

}

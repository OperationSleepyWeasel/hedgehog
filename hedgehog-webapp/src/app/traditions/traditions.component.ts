import { Component, OnChanges, OnInit } from '@angular/core';
import { Tradition } from './model/tradition.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'hh-traditions-root',
  templateUrl: './traditions.component.html',
  styles: []
})
export class TraditionsComponent implements OnInit {

  traditions: Tradition[];

  mockTraditions: Tradition[] = [
    { name: 'Ognisko', description: 'Let it burn...' },
    { name: 'Szukanie jeża', description: 'Znajdźmy skubańca!' },
    { name: 'Pizza w Łóżku' },
    { name: 'Piwo z wiśniami' },
    { name: 'Rowery do Helu' },
    { name: 'Spacer nad zatoką do Juraty' },
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Tradition[]>(environment.apiUrl + '/traditions')
      .subscribe((payload: Tradition[]) => this.traditions = payload);
  }

}

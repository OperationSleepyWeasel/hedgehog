import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionsListComponent } from './list/traditions-list.component';
import { TraditionsComponent } from './traditions.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    TraditionsComponent,
    TraditionsListComponent,
  ],
  exports: [
    TraditionsComponent
  ]
})
export class TraditionsModule { }

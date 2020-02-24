import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionsListComponent } from './list/traditions-list.component';
import { TraditionsComponent } from './traditions.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TraditionsRoutingModule } from './traditions-routing.module';
import { TraditionsDetailsComponent } from './details/traditions-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    TraditionsRoutingModule,
  ],
  declarations: [
    TraditionsComponent,
    TraditionsListComponent,
    TraditionsDetailsComponent,
  ],
  exports: [
    TraditionsComponent
  ]
})
export class TraditionsModule { }

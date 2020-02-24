import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraditionsComponent } from './traditions.component';
import { TraditionsDetailsComponent } from './details/traditions-details.component';

const routes: Routes = [
  {
    path: 'traditions',
    component: TraditionsComponent,
  },
  {
    path: 'traditions/:id',
    component: TraditionsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraditionsRoutingModule { }


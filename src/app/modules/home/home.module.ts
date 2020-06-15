import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsComponent } from './parts/parts.component';
import { ControlComponent } from '../../shared/components/control/control.component';
import { FeatureComponent } from '../../shared/components/feature/feature.component';



@NgModule({
  declarations: [
    PartsComponent,
    FeatureComponent,
    ControlComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PartsComponent,
  ]
})
export class HomeModule { }

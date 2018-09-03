import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  PocD3CanvasShadowDomViewEncapsulationComponent
} from './d3/d3-canvas-shadow-dom-view-encapsulation/poc-d3-canvas-shadow-dom-view-encapsulation.component';
import { PocD3CanvasBarChartComponent } from './d3/d3-canvas-shadow-dom-view-encapsulation/poc-d3-canvas-bar-chart/poc-d3-canvas-bar-chart.component';
import {
  PocD3SvgShadowDomViewEncapsulationComponent
} from './d3/d3-svg-shadow-dom-view-encapsulation/poc-d3-svg-shadow-dom-view-encapsulation.component';
import { HorizBarModule } from './d3/horiz-bar/horiz-bar.module';
import { SamplePocComponent } from './demos/sample-poc/sample-poc.component';
import { PocOverviewComponent } from './guide/poc-overview/poc-overview.component';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { PocD3SvgBarChartComponent } from './d3/d3-svg-shadow-dom-view-encapsulation/poc-d3-svg-bar-chart/poc-d3-svg-bar-chart.component';
import { PocShadowDomBarFormComponent } from './d3/forms/bar-form/poc-shadow-dom-bar-form.component';

@NgModule({
            imports: [
              CommonModule,
              HorizBarModule,
              SharedModule,
              PocRoutingModule,
            ],
            declarations: [
              PocComponent,
              PocOverviewComponent,
              SamplePocComponent,
              PocD3SvgShadowDomViewEncapsulationComponent,
              PocD3SvgBarChartComponent,
              PocD3CanvasBarChartComponent,
              PocD3CanvasShadowDomViewEncapsulationComponent,
              PocShadowDomBarFormComponent,
            ],
          })
export class PocModule {
}

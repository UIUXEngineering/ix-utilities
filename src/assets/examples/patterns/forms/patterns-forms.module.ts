import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilderSampleComponent } from './form-builder-sample/form-builder-sample.component';
import { FormModelService } from './form-service-sample/form-model.service';
import { FormServiceSampleComponent } from './form-service-sample/form-service-sample.component';

@NgModule({
            imports: [
              CommonModule,
              ReactiveFormsModule,
              MatButtonModule,
              MatFormFieldModule,
              MatInputModule,
              MatRadioModule,
              MatSelectModule,
              MatCheckboxModule,
              MatIconModule,
            ],
            declarations: [
              FormServiceSampleComponent,
              FormBuilderSampleComponent,
            ],
            exports: [
              FormServiceSampleComponent,
              FormBuilderSampleComponent,
            ],
            providers: [
              FormModelService,
            ],
          })
export class PatternsFormsModule {
}

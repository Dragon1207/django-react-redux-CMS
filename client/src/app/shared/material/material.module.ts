import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule, MatListModule } from '@angular/material';

const modules = [
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule,
  MatListModule
]

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  declarations: [],
  exports: [
    modules
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule
  ]
})
export class CursosModule { }

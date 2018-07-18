import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaComponent } from './matricula.component';
import { BasicComponent } from './basic/basic.component';
import { DocumentsComponent } from './documents/documents.component';
import { NecessitiesComponent } from './necessities/necessities.component';
import { ParentsComponent } from './parents/parents.component';
import { HomeAddressComponent } from './home-address/home-address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatriculaComponent, BasicComponent, DocumentsComponent, NecessitiesComponent, ParentsComponent, HomeAddressComponent]
})
export class MatriculaModule { }

import { ParentsComponent } from './../parents/parents.component';
import { NecessitiesComponent } from './../necessities/necessities.component';
import { MatriculaComponent } from './../matricula.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaRoutingComponent } from './matricula-routing.component';
import { RouterModule, CanActivate, CanActivateChild } from '@angular/router';
import { BasicComponent } from '../basic/basic.component';
import { MatriculaModule } from '../matricula.module';
import { AuthGuard } from '../../guards/auth.guard';
import { patch } from 'webdriver-js-extender';
import { DocumentsComponent } from '../documents/documents.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'matricula',
        component: MatriculaComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], 
        children:[
          {
            path:'',
            redirectTo: 'matricula',
            pathMatch: 'full'
          },
          {path:'basic', component: BasicComponent},
          {path:"documents", component: DocumentsComponent},
          {path:"necessities", component:NecessitiesComponent},
          {path:"parents",component: ParentsComponent}
        ]
      }

    ])
  ],
  declarations: [MatriculaRoutingComponent],
  exports:[RouterModule]
})
export class MatriculaRoutingModule { }

import { patch } from 'webdriver-js-extender';
import { AdminDiariosComponent } from './../admin-diarios/admin-diarios.component';
import { AdminDashboard3Component } from './../admin-dashboard3/admin-dashboard3.component';
import { BasicComponent } from './../../matricula/basic/basic.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../../guards/auth.guard';
import { AdminComponent } from './../admin.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard4Component } from './../admin-dashboard4/admin-dashboard4.component';

import { AdminDashboard6Component } from './../admin-dashboard6/admin-dashboard6.component';
import { ProfileComponent } from './../../auth/profile/profile.component';
import { AdminDashboard7Component } from '../admin-dashboard7/admin-dashboard7.component';
import { AdminTemplateComponent } from '../admin-template/admin-template.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          { path: 'dashboard1', component: AdminDashboard1Component },
          { path: 'dashboard2', component: AdminDashboard2Component },
          { path: 'dashboard3', component: AdminDashboard3Component},
          { path: 'dashboard4', component: AdminDashboard4Component},
          { path: 'dashboard6', component: AdminDashboard6Component},
          { path: 'dashboard7', component: AdminDashboard7Component},
          { path: 'template', component: AdminTemplateComponent},
          { path: 'diarios', component:AdminDiariosComponent},
          { path: 'profile', component: ProfileComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

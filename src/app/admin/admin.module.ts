import { AdminDiariosComponent } from './admin-diarios/admin-diarios.component';
import { AdminDashboard4Component } from './admin-dashboard4/admin-dashboard4.component';
import { AdminDashboard3Component } from './admin-dashboard3/admin-dashboard3.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard5Component } from './admin-dashboard5/admin-dashboard5.component';
import { AdminDashboard6Component } from './admin-dashboard6/admin-dashboard6.component';
import { AdminDashboard7Component } from './admin-dashboard7/admin-dashboard7.component';
import { AdminTemplateComponent} from './admin-template/admin-template.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminDashboard3Component,
    AdminDashboard4Component,
    AdminDashboard5Component,
    AdminDashboard6Component,
    AdminDashboard7Component,
    AdminDiariosComponent,
    AdminTemplateComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }

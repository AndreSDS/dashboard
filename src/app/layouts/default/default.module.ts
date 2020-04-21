import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatPaginatorModule, MatTableModule, MatDividerModule, MatCardModule } from '@angular/material';

import { DefaultComponent } from './default.component';
import { DashBoardComponent } from '../../pages/dashboard/dashboard.component';
import { PostsComponent } from '../../pages/posts/posts.component';
import { DashboardService } from 'src/app/modules/dashboard.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashBoardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    MatSidenavModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }

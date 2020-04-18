import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatDividerModule } from '@angular/material';

import { DefaultComponent } from './default.component';
import { DashBoardComponent } from '../../pages/dashboard/dashboard.component';
import { PostsComponent } from '../../pages/posts/posts.component';

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
    MatDividerModule
  ],
  exports: [
    MatSidenavModule
  ]
})
export class DefaultModule { }

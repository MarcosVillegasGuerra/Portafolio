import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnePageRoutingModule } from './one-page-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent, 
    ProfileComponent, 
    AboutMeComponent, 
    ContactComponent, 
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    OnePageRoutingModule,
    SharedModule
  ]
})
export class OnePageModule { }

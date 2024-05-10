import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { InfoListComponent } from '../components/info-list/info-list.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { HeaderComponent } from '../components/menu/header/header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, AboutMeComponent, InfoListComponent, ProjectsComponent, HeaderComponent],
})
export class HomePageModule {}

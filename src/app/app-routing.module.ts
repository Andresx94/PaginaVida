import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '',children: []},
  { path: 'abilities', component: AbilitiesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'projects', component: ProjectsComponent}
  
  
];
export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

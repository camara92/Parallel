import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'dashboard', component: NavbarComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'about', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

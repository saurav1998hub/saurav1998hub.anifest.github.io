import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'main-page'},
  {
    path:'main-page',
    component: AppLayoutComponent,
    children:[
      {path:'', pathMatch:'full', component: LandingPageComponent},
      {path:'contact', pathMatch:'full', component: ContactComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {Home} from './content/pages/home/home';
import {Header} from './content/global/header/header';
import {Me} from './content/pages/me/me';
import {MyProjects} from "./content/pages/my-projects/my-projects";
import {Contact} from './content/pages/contact/contact';
import {Footer} from './content/global/footer/footer';

const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'me', component: Me},
  {path: 'my-projects', component: MyProjects},
  {path: 'contact', component: Contact},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Header,
    Me,
    MyProjects,
    Contact,
    Footer
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksDetailsComponent } from './components/books-details/books-details.component';


const routes: Routes = [
  {path:'', component: WelcomeComponent, pathMatch: 'full'},
  {path:'list', component: BooksListComponent},
  {path:'details/:id', component: BooksDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

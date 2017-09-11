import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule }   from '@angular/router';
import { UsersService } from './users/users.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        DetailsComponent,
        DashboardComponent,
        NavbarComponent
    ],
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }, 
            {
                path: 'users',
                component: UsersComponent
            } ,
            {
                path: 'details/:id' ,
                component: DetailsComponent
            }
        ]),
        BrowserModule,
        FormsModule
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule { }

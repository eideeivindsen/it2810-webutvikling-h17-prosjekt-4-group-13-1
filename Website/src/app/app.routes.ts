import { SearchViewComponent } from './search-view/search-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LoggedInGuard } from './_services/logged-in.guard';

export const routes = [
    { path: '', component: SearchViewComponent, pathMatch: 'full' },
    { path: 'profile', component: ProfileViewComponent , canActivate: [LoggedInGuard]  },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

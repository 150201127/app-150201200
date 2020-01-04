import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    {
        path: 'portal',
        loadChildren: './portal/portal.module#PortalModule'
    },
    {
        path: 'player',
        loadChildren: './player/player.module#PlayerModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupPageModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfilePageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'profile-edit',
        loadChildren: './profile-edit/profile-edit.module#ProfileEditPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'posts',
        loadChildren: './posts/posts.module#PostsModule',
        canActivate: [AuthGuard]
    },  { path: 'my-posts', loadChildren: './src/app/posts/my-posts/my-posts.module#MyPostsPageModule' },



];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

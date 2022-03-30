/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/auth/forgot/forgot.module').then( m => m.ForgotPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/menu/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'friends-home',
    loadChildren: () => import('./pages/menu/friends/friends-home/friends-home.module').then( m => m.FriendsHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'friends-crud',
    loadChildren: () => import('./pages/menu/friends/friends-crud/friends-crud.module').then( m => m.FriendsCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'teams-home',
    loadChildren: () => import('./pages/menu/teams/teams-home/teams-home.module').then( m => m.TeamsHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'teams-crud',
    loadChildren: () => import('./pages/menu/teams/teams-crud/teams-crud.module').then( m => m.TeamsCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'teams-details',
    loadChildren: () => import('./pages/menu/teams/teams-details/teams-details.module').then( m => m.TeamsDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile-home',
    loadChildren: () => import('./pages/menu/profile/profile-home/profile-home.module').then( m => m.ProfileHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile-crud',
    loadChildren: () => import('./pages/menu/profile/profile-crud/profile-crud.module').then( m => m.ProfileCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile-details',
    loadChildren: () => import('./pages/menu/profile/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tournaments-home',
    loadChildren: () => import('./pages/menu/tournaments/tournaments-home/tournaments-home.module').then( m => m.TournamentsHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tournaments-details',
    loadChildren: () => import('./pages/menu/tournaments/tournaments-details/tournaments-details.module').then( m => m.TournamentsDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chats-home',
    loadChildren: () => import('./pages/menu/chats/chats-home/chats-home.module').then( m => m.ChatsHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chats-details/:id',
    loadChildren: () => import('./pages/menu/chats/chats-details/chats-details.module').then( m => m.ChatsDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modal-notification',
    loadChildren: () => import('./modal/modal-notification/modal-notification.module').then( m => m.ModalNotificationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

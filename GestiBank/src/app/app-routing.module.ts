import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'conversion-page',
    loadChildren: () =>
      import('./conversion-page/conversion-page.module').then(
        (m) => m.ConversionPagePageModule
      ),
  },
  {
    path: 'connexion-page',
    loadChildren: () =>
      import('./connexion-page/connexion-page.module').then(
        (m) => m.ConnexionPagePageModule
      ),
  },
  {
    path: 'creation-page',
    loadChildren: () =>
      import('./creation-page/creation-page.module').then(
        (m) => m.CreationPagePageModule
      ),
  },  {
    path: 'espace-agent',
    loadChildren: () => import('./espace-agent/espace-agent.module').then( m => m.EspaceAgentPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

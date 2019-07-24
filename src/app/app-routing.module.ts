import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TargetCollisionAnalysisComponent} from './components/targetCollisionAnalysis/targetCollisionAnalysis.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'analysis',
    data: {
      tabName: 'Analysis',
      id: 0,
    },
    component: TargetCollisionAnalysisComponent
  },
  {
    path: 'home',
    data: {
      tabName: '首页',
      id: 101,
      show: true
    },
    component: AppComponent,
    canActivate: [/*AuthGuard*/],
  },
  {
    path: '',
    redirectTo: '/analysis',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, preloadingStrategy: PreloadAllModules })],
  providers: [/*AuthGuard*/],
  exports: [RouterModule]
})
export class AppRoutingModule { }

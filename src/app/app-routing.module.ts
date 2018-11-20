import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';
import { MemorygameComponent } from './memorygame/memorygame.component';
import { EigenappComponent } from './eigenapp/eigenapp.component';

const routes: Routes = [
  {path: 'colorpatches', component: ColorpatchesComponent},
  { path: '',
    redirectTo: '/colorpatches',
    pathMatch: 'full'
  },
  {path: 'memorygame', component: MemorygameComponent},
  {path: 'eigenapp', component: EigenappComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
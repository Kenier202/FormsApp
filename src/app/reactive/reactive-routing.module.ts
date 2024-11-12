import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basic', component: BasicPageComponent},
      {path: 'dynamic', component: BasicPageComponent},
      {path: 'switches', component: BasicPageComponent},
      {path: '**', component: BasicPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }

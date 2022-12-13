import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PianoViewComponent } from './pages/piano-view/piano-view.component';
import { PianoComponent } from './piano/piano.component';

const routes: Routes = [
  { path: '', component: PianoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

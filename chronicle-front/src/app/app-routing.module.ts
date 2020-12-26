import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadPageComponent } from './components/upload-page/upload-page.component';

const routes: Routes = [
  {path: 'upload-page', component: UploadPageComponent},
  { path: '**', redirectTo: '/upload-page', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

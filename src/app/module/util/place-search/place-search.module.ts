import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { PlaceSearchComponent } from './place-search.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PlaceSearchComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDu04Rs5J4w318HpZKf-oPBzF_QVAjMjqQ',
      libraries: ['places']
    }),
  ],
  exports: [
    PlaceSearchComponent
  ]
})
export class PlaceSearchModule {}

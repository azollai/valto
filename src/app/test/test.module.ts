import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaceSearchModule } from '../common/place-search/place-search.module';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { TestComponent } from './test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRoutingModule } from './test-routing.module';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PlaceSearchModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,

    TestRoutingModule
  ],
  providers: []
})
export class TestModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsPageRoutingModule } from './reactive-forms-routing.module';

import { ReactiveFormsPage } from './reactive-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReactiveFormsPage]
})
export class ReactiveFormsPageModule {}

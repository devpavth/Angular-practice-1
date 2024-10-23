import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';

import { ProductComponent } from 'src/app/components/product/product.component';

import { StructuralDirectivesComponent } from 'src/app/components/structural-directives/structural-directives.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    ProductComponent,
    StructuralDirectivesComponent
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}

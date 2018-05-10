import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagementRitmosPage } from './management-ritmos';

@NgModule({
  declarations: [
    ManagementRitmosPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagementRitmosPage),
  ],
})
export class ManagementRitmosPageModule {}

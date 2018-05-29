import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DebuggerPage } from './debugger';

@NgModule({
  declarations: [
    DebuggerPage,
  ],
  imports: [
    IonicPageModule.forChild(DebuggerPage),
  ],
})
export class DebuggerPageModule {}

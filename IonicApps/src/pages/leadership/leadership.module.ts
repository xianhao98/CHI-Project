import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadershipPage } from './leadership';

@NgModule({
  declarations: [
    LeadershipPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadershipPage),
  ],
})
export class LeadershipPageModule {}

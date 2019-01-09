import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakerModalPage } from './speaker-modal';

@NgModule({
  declarations: [
    SpeakerModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakerModalPage),
  ],
})
export class SpeakerModalPageModule {}

import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


import {RecordService} from '../../providers/record-service';



@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html',
  providers: [RecordService]
})
export class ContentDetailPage {

  //public records: any;
  record: any;

  constructor(public navCtrl: NavController, public recordService: RecordService, public navParams: NavParams) {
	 this.record = navParams.get('record');
   //this.loadRecord(this.selectedDataset.id);
  }


 /*loadRecord(datasetId){
    this.recordService.load(datasetId)
    .then(data => {
      this.records = data;
    });
  }*/

}

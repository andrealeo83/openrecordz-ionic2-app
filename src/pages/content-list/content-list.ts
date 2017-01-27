import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


import {RecordService} from '../../providers/record-service';



@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
  providers: [RecordService]
})
export class ContentListPage {

  public records: any;
  selectedDataset: any;

  constructor(public navCtrl: NavController, public recordService: RecordService, public navParams: NavParams) {
	 this.selectedDataset = navParams.get('dataset');
   this.loadRecord(this.selectedDataset.id);
  }


 loadRecord(datasetId){
    this.recordService.load(datasetId)
    .then(data => {
      this.records = data;
    });
  }

}

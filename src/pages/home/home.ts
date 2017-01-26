import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import {RecordService} from '../../providers/record-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
providers: [RecordService]
})
export class HomePage {

  public records: any;

  constructor(public navCtrl: NavController, public recordService: RecordService) {
	 this.loadRecord();
  }


 loadRecord(){
    this.recordService.load()
    .then(data => {
      this.records = data;
    });
  }

}

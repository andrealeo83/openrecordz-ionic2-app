import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecordService} from '../../providers/record-service';
import { ContentDetailPage } from '../content-detail/content-detail';
import * as moment from 'moment';



@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
  providers: [RecordService]
})
export class ContentListPage {

  public records: any=[];
  selectedDataset: any;
  currentPage:number=0;

  constructor(public navCtrl: NavController, public recordService: RecordService, public navParams: NavParams) {
	 this.selectedDataset = navParams.get('dataset');
   this.loadRecord(this.selectedDataset.id);
  }


 loadRecord(datasetId){
    this.recordService.load(datasetId)
    .then(data => {
      this.records = data;
       /*for(let record of data) {
          this.records.push(record);
        }*/
    });
  }

   recordSelected(record) {
    console.log(record.id + " selected");
    this.navCtrl.push(ContentDetailPage,
      {record: record}
    );
  }

   doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.currentPage++;
    this.recordService.load(this.selectedDataset.id, this.currentPage)
    .then(data => {
     /* this.records = data;*/
        let dataAsArray:any=data;
        for(let record of dataAsArray) {
          this.records.push(record);
        }

       // resolve(true);

       infiniteScroll.complete();
    });
   }

}

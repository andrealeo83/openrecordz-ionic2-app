import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ContentPage } from '../content/content';
import {DatasetService} from '../../providers/dataset-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
providers: [DatasetService]
})
export class HomePage {

  public datasets: any;
  //public navCtrl : NavController;
  //content: any = ContentPage;

  constructor(public navCtrl: NavController, public datasetService: DatasetService) {
	 this.loadDatasets();
  }


 loadDatasets(){
    this.datasetService.load()
    .then(datasets => {
      this.datasets = datasets;
    });
  }

  datasetSelected(dataset) {
    console.log(dataset.id + " selected");
    this.navCtrl.push(ContentPage,
      {dataset: dataset}
    );
  }

}

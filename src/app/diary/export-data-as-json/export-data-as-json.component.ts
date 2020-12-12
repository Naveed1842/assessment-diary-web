import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { TestDataService } from 'src/app/core/test-data.service';

@Component({
  selector: 'app-export-data-as-json',
  templateUrl: './export-data-as-json.component.html',
  styleUrls: ['./export-data-as-json.component.scss']
})
export class ExportDataAsJsonComponent implements OnInit {

  constructor(private testDataService:TestDataService) { }

  ngOnInit(): void {
  }
  download(){
    let latestData=this.testDataService.getData();
    let storeData= JSON.stringify(latestData);
    const blob = new Blob([storeData], {type:"text/json"});
     saveAs(blob, "DiaryData.json");
  }
}

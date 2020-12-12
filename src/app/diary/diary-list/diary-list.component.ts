import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/core/models/item-interfaces';
import { TestDataService } from 'src/app/core/test-data.service';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.scss']
})
export class DiaryListComponent implements OnInit {
  countries = COUNTRIES;
  isEnabledList:boolean=false;
  itemList:any[]=[];//new MatTableDataSource();
  displayedColumns: string[] = ['title','description', 'timeStamp', 'url'];
  constructor(private testDataService:TestDataService,    
  private router:Router,
    ) { }
    headElements: string[] = ['title','description', 'timeStamp', 'url'];
  ngOnInit(): void {
    //this.itemList =  new MatTableDataSource (this.testDataService.getData());
    this.itemList=this.testDataService.getData();
    this.testDataService.dataTransMission.subscribe( message => {
    if(message.addItem) {
      this.itemList = null;
      setTimeout( () => 
      // this.itemList = new MatTableDataSource (this.testDataService.getData()
      this.itemList = this.testDataService.getData(),100);
    }
    } );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.itemList.push(filterValue.trim().toLowerCase());
   
  }

  deletItem(item: ItemModel) {
    this.testDataService.deleteItem(item);
  }
  
  onNewBtnClick()
  {
    this.router.navigate(['/','diary','0','edit']);
  }
}

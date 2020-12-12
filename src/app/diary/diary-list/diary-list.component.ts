import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TestDataService } from "src/app/core/test-data.service";

@Component({
  selector: "app-diary-list",
  templateUrl: "./diary-list.component.html",
  styleUrls: ["./diary-list.component.scss"],
})
export class DiaryListComponent implements OnInit {
  itemList: any[] = [];
  constructor(
    private testDataService: TestDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.itemList = this.testDataService.getData();
    this.testDataService.dataTransMission.subscribe((message) => {
      if (message.addItem) {
        this.itemList = null;
        setTimeout(() => (this.itemList = this.testDataService.getData()), 100);
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.itemList.push(filterValue.trim().toLowerCase());
  }
  // deletItem(item: ItemModel){
  //   this.testDataService.deleteItem(item);
  // }
  onNewBtnClick() {
    this.router.navigate(["/", "diary", "0", "edit"]);
  }
}

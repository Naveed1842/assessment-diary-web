import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ItemModel } from "./models/item-interfaces";

@Injectable({
  providedIn: "root",
})
export class TestDataService {
  public httpOptions;
  dataTransMission: Subject<any> = new Subject<any>();
  currentTimeStamp = Date.now();
  constructor(protected http: HttpClient) {}
  getData() {
    return this.itemdata;
  }
  itemdata: ItemModel[] = [
    {
      title: "Fb Profile",
      description: "Facebook Profile Picture",
      timeStamp: this.currentTimeStamp,
      image: "assets/images/user.png",
      url: "https://m.facebook.com/home.php",
    },
    {
      title: "Twitter Profile",
      description: "Twitter Profile Picture",
      timeStamp: this.currentTimeStamp,
      image: "assets/images/user02.jpg",
      url: "https://twitter.com/home",
    },
    {
      title: "LinkedIn Profile",
      description: "Linkedin Profile ",
      timeStamp: this.currentTimeStamp,
      image: "assets/images/user03.jpg",
      url: "https://www.linkedin.com/",
    },
    {
      title: "Instagram Profile",
      description: "Instagram Profile Picture",
      timeStamp: this.currentTimeStamp,
      image: "assets/images/user01.jpg",
      url: "https://www.instagram.com/",
    }
  ];
  addNewItem(newItem: ItemModel) {
    this.itemdata.unshift(newItem);
    this.dataTransMission.next({ addItem: true });
  }
  deleteItem(deletionItem: ItemModel) {
    for (let i = 0; i < this.itemdata.length; i++) {
      if (this.itemdata[i].description == deletionItem.description) {
        this.itemdata.splice(i, 1);
      }
    }
    this.dataTransMission.next({ addItem: true });
  }

  //In real word use case only for demonstration purpose;
  public postForm(body: any): Observable<any> {
    return this.http.post("apiUrl", body, this.multiPartReqheaders);
  }

  public putForm(body: any): Observable<any> {
    return this.http.put("apiUrl", body, this.multiPartReqheaders);
  }
  /*setting header info with token*/
  public get multiPartReqheaders() {
    let token = JSON.parse(localStorage.getItem("AccessToken"));
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.httpOptions = {
      headers: headers,
    };
    return this.httpOptions;
  }
}

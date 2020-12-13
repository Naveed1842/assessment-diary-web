import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { TestDataService } from "src/app/core/test-data.service";
@Component({
  selector: "app-diary-create-edit",
  templateUrl: "./diary-create-edit.component.html",
  styleUrls: ["./diary-create-edit.component.scss"],
})
export class DiaryCreateEditComponent implements OnInit {
  formGroup: FormGroup;
  imageError: string;
  isImageSaved: boolean=false;
  imageSourceUrl:string;
  editMode:boolean=false;
  recordUpdateItem:string="";
  urlPattern = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
  constructor(
    private fb: FormBuilder,
    private testDataService: TestDataService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let serverData=this.testDataService.getData();
    this.createForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"] != 0) {
        this.isImageSaved=true;
        this.editMode=true;
        this.recordUpdateItem=params["id"];
       let itemToUpdate=serverData.filter(item=>item.uuid==params["id"]);
        this.populateForm(itemToUpdate);
      }
    });
    
  }
  createForm() {
    this.formGroup = this.fb.group({
      title: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
      ],
      description: [""],
      image: ["", Validators.required],
      url: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(this.urlPattern),
        ]),
      ],
      timeStamp: Date.now(),
      uuid:this.getRandomInt(6)
    });
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  populateForm(value) {
    
    this.imageSourceUrl=value[0].image;
    this.formGroup.patchValue(value[0]);
  }
  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ["image/png", "image/jpeg"];
      const max_height = 15200;
      const max_width = 25600;
      if (fileInput.target.files[0].size > max_size) {
        this.imageError = "Maximum size allowed is " + max_size / 1000 + "Mb";
        return false;
      }
      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = "Only Images are allowed ( JPG | PNG )";
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const img_height = rs.currentTarget["height"];
          const img_width = rs.currentTarget["width"];
          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              "Maximum dimentions allowed " +
              max_height +
              "*" +
              max_width +
              "px";
            return false;
          } else {
            this.imageSourceUrl = e.target.result;
            this.isImageSaved = true;
            const file = fileInput.target.files[0];
            this.formGroup.get("image").setValue(file);
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  saveItem() {
    if (this.formGroup.invalid) {
      return;
    }
    if(this.editMode==true){
      let updateItem={
        uuid:this.recordUpdateItem,
        title:this.formGroup.value.title,
        description:this.formGroup.value.description,
        timeStamp:Date.now(),        
        image:this.formGroup.value.image,
        url:this.formGroup.value.url,
      }
      this.testDataService.updateItem(updateItem);
      this.route.navigateByUrl("/diary");
    }
    else{
      this.testDataService.addNewItem(this.formGroup.value);
      this.route.navigateByUrl("/diary");
    }
    //In real world app it will done using below formData and postForm methods;
  }
  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.formGroup.controls[controlName];
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
  /*Just for demonstration purpose*/
  formData() {
    const formData = new FormData();
    let formValue = this.formGroup.value;
    formData.append("image", this.formGroup.get("image").value);
    formData.append("title", formValue.title);
    formData.append("description", formValue.description);
    formData.append("url", formValue.url);
    formData.append("timeStamp", formValue.timeStamp);
    return formData;
  }
  postForm() {
    let saveFormData = this.formData();
    this.testDataService.postForm(saveFormData).subscribe((response) => {
      //server response will be catch;
    });
  }
  cancelItem() {
    this.route.navigateByUrl("/diary");
  }
}

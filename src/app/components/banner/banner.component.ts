import { Component, OnInit } from "@angular/core";
import { AjaxCallService } from "src/app/services/Ajax/ajax-call.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  // constructor() {}

  // ngOnInit(): void {
  // }
  public bannerInfo: any = [];
  public bannerInfoObjToAny: any = [];
  // public bannerInfo: any = [];
  // public bannerInfoObjToAny: any = [];

  constructor(private commonService: AjaxCallService) {}

  ngOnInit(): void {
    // //events data info local json
    // this.commonService.bannerGetData().subscribe((res: any[]) => {
    //   this.bannerInfoObjToAny = res;
    //   this.bannerInfo = this.bannerInfoObjToAny.banner;
    //   console.log(this.bannerInfo);
    // });
    this.commonService.bannerGetData().subscribe((res: any[]) => {
      this.bannerInfoObjToAny = res;
      this.bannerInfo = this.bannerInfoObjToAny.banner;
      console.log(this.bannerInfo);
    });
  }
}

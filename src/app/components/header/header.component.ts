// import { Component, OnInit } from "@angular/core";
// import { DataTransferService } from "src/app/services/data-transfer-service/data-transfer.service";

// @Component({
//   selector: "app-header",
//   templateUrl: "./header.component.html",
//   styleUrls: ["./header.component.css"],
// })
// export class HeaderComponent implements OnInit {
//   public refValue: "";
//   text = "";

//   constructor(private data: DataTransferService) {}

//   ngOnInit(): void {}
//   upDatetext(event: any) {
//     this.text = event.target.value;
//     this.data.updateData(this.text);
//   }
// }
import { Component, OnInit } from "@angular/core";
import { DataTransferService } from "../../services/data-transfer-service/data-transfer.service";
import { from } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  // public refValue: string;
  // text = "";
  // constructor(private data: DataTransferService) {}

  // ngOnInit(): void {}

  // updateText(event: any) {
  //   this.text = event.target.value;
  //   this.data.updateData(this.text);
  // }
  public refValue: string;
  text = "";
  constructor(private data: DataTransferService) {}

  ngOnInit(): void {}

  updateText(event: any) {
    this.text = event.target.value;
    this.data.updateData(this.text);
  }
}

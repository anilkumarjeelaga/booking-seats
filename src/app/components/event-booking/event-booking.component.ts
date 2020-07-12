import { Component, OnInit, ElementRef } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  RequiredValidator,
} from "@angular/forms";
import { DataTransferService } from "src/app/services/data-transfer-service/data-transfer.service";
import { AjaxCallService } from "src/app/services/Ajax/ajax-call.service";

@Component({
  selector: "app-event-booking",
  templateUrl: "./event-booking.component.html",
  styleUrls: ["./event-booking.component.css"],
})
export class EventBookingComponent implements OnInit {
  /*
   public currentEventInfoShared = '';
 public currentSelectedValue:any = [];
 public localNumberOfAttende:any = [];
 public contractValues: any = []; //  Event booking form values 
 public totalEventSeatsNumber: number;
 public count:number = 0;
 public compareValue:boolean;
 public MainData:any = [];
 public statusMessage: boolean = false;
  */

  public currentEventInfoShared = "";
  public currentSelectedValue: any = [];
  public localNumberOfAttende: any = [];
  public contractValues: any = []; //Event booking From values
  public count: number = 0;
  public totalEventSeatsNumber: number;
  public compareValue: boolean;
  public statusMessage: boolean = false;
  public MainData: any = [];
  itemDetails = [
    {
      numberOfAttendee: "",
    },
  ];
  // itemDetails = [{ numberOfAttende: "" }];

  constructor(
    // private fb: FormBuilder,
    private data: DataTransferService,
    private ajaxData: AjaxCallService,
    private elem: ElementRef
  ) {}
  //reactive form elements
  // heroFormGroup: FormGroup;
  // ngOnInit(): void {
  // this.heroFormGroup = this.fb.group({
  //   name: [
  //     "",
  //     [
  //       Validators.required,
  //       Validators.minLength(4),
  //       Validators.maxLength(10),
  //     ],
  //   ],
  //   email: ["", [Validators.required, Validators.email]],
  //   number: ["", [Validators.required, Validators.minLength(10)]],
  // });
  //}
  // reactive form getter method
  // get name() {
  //   return this.heroFormGroup.get("name");
  // }
  // getter method
  // get name() {
  //   return this.heroFormGroup.get("name");
  // }
  // get email() {
  //   return this.heroFormGroup.get("email");
  // }
  // get number() {
  //   return this.heroFormGroup.get("number");
  // }
  ngOnInit(): void {
    this.localNumberOfAttende = this.ajaxData.numberOfAttende();
    this.data.shareEventData.subscribe(
      (sharingEventData) => (this.currentEventInfoShared = sharingEventData)
    );
  }

  ngAfterViewInit() {
    let elements = this.elem.nativeElement.querySelectorAll(
      ".event-seats-count-transfer"
    );
    let totalEventSeats: number = elements[0].innerText;
    this.totalEventSeatsNumber = totalEventSeats;
  }
  public lastOptionValueLength: number;
  // isOptionValue(e){
  //   let selectedOptionValue = e.target.value;
  //   let lastOptionValue = e.target.length-1;
  //   this.lastOptionValueLength = lastOptionValue;
  //   this.currentSelectedValue = selectedOptionValue;
  //   let someData:number = this.currentSelectedValue;
  //   let compare:boolean = lastOptionValue <= someData;

  //   if(someData){
  //       let newRow = {
  //         "numberOfAttendee": ""
  //       }
  //       if(this.currentSelectedValue <= this.lastOptionValueLength){

  //         if(this.lastOptionValueLength == this.itemDetails.length){
  //           // this.itemDetails.push(newRow);
  //           for(let i =0; i<someData; i++){
  //           this.itemDetails.push(newRow);
  //          }
  //         }

  //       }
  //   }
  // }

  addNewAttendeName(event: any) {
    this.count++;
    let newRow = {
      numberOfAttendee: "",
    };
    this.compareValue = this.count < this.totalEventSeatsNumber;
    if (this.compareValue) {
      if (this.count) {
        this.itemDetails.push(newRow);
      }
    }
    this.statusMessage = false; //If New Attendee is added by user to hide the status messge
  }
  onSubmit(data) {
    if (data) {
      let res: any = Object.entries(data);
      this.MainData = res;
      console.log("EventBookingConfirmData", this.MainData); //pls check confirmed eventBooking data in console
      this.statusMessage = true;
    } else {
      this.statusMessage = false;
    }
  }
}

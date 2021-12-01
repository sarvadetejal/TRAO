import { Component, OnInit,Input,TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css'],
})
export class UserPaymentComponent implements OnInit {
  @Input('total') total!:number;
  constructor(private dialog:MatDialog) {}
  openDialog(template: TemplateRef<any>) {
    this.dialog.open(template);
    alert("Payment Successful..!");
  }
  ngOnInit(): void {

  }
}

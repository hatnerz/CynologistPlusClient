import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-order-page',
  templateUrl: './create-order-page.component.html',
  styleUrls: ['./create-order-page.component.scss']
})
export class CreateOrderPageComponent implements OnInit {

    createOrderForm!: FormGroup

    ngOnInit(): void {
        this.initializeForm();
    }

    private initializeForm() {
        this.createOrderForm = new FormGroup({
            comment: new FormControl(''),
            dogId: new FormControl(''),
            trainingCenterId: new FormControl(''),
        });
    }
}

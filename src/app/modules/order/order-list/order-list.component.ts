import { Component, Input } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

    constructor(public localizationService: LocalizationService)
    {}

    @Input()
    isCanBeModified: boolean = false;

    @Input()
    orders!: Order[]

    getCorrectPrice(order: Order) {
        if(order.price == null || order.price == undefined)
            return "Not determined"
        return order.price + " " + order.currency;
    }

    getCorrectBoolean(value: boolean | null) {
        if(value == true) {
            return "Yes"
        }
        else {
            return "No";
        }
    }
}

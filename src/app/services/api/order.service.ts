import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CreateOrderModel, Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(
        private http: HttpClient,
        @Inject('API_URL') private apiUrl: string,
    ) 
    { }

    createOrder(createOrderModel : CreateOrderModel) : Observable<any> {
        return this.http.post(`${this.apiUrl}api/Order`, createOrderModel);
    }

    getClientOrders(id: number) : Observable<any> {
        return this.http.get(`${this.apiUrl}api/Order/client/${id}`);
    }

    getTrainingCenterOrders(id: number) : Observable<any> {
        return this.http.get(`${this.apiUrl}api/Order/training-center/${id}`);
    }

    changeOrder(order: Order) : Observable<any> {
        return this.http.patch(`${this.apiUrl}api/Order`, order);
    }
}

export interface Order {
    id: number;
    orderDate: Date | null;
    price: number | null;
    currency: string | null;
    comment: string | null;
    isPaid: boolean | null;
    isCompleted: boolean | null;
    approved: boolean | null;
    dogId: number | null;
    dogTrainingCenterId: number | null;
}

export interface CreateOrderModel {
    comment: string | null;
    dogId: number;
    dogTrainingCenterId: number;
    timeOffset: number;
}
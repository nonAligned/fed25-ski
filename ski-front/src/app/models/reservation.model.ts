export class Reservation {
    mountain_id: number;
    firstName: string;
    lastName: string;
    dateFrom: string;
    dateTo: string;
    price: string;

    constructor(obj?: any) {
        this.mountain_id = obj && obj.mountain_id || null;
        this.firstName = obj && obj.firstName || "";
        this.lastName = obj && obj.lastName || "";
        this.dateFrom = obj && obj.dateFrom || "";
        this.dateTo = obj && obj.dateTo || "";
        this.price = obj && obj.price || "";
    }
}
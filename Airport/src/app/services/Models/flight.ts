import { Ticket } from "./ticket";

export class Flight {
    id: number;
    pointOfDeparture: string;
    dateOfDeparture: Date;
    destination: string;
    dateOfArrival: Date;
    tickets: Ticket[]
}
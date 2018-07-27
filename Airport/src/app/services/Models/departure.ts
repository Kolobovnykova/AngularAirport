import { Flight } from "./flight";
import { Crew } from "./crew";
import { Plane } from "./plane";

export class Departure {
    id: number;
    flight: Flight;
    dateOfDeparture: Date;
    crew: Crew;
    plane: Plane;
}
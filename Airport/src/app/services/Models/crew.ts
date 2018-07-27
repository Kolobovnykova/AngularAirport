import { Pilot } from "./pilot";
import { Stewardess } from "./stewardess";

export class Crew {
    id: number;
    pilot: Pilot;
    stewardesses: Stewardess[];
}
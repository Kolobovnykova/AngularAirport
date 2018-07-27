import { PlaneType } from "./planetype";

export class Plane {
    id: number;
    name: string;
    planetype: PlaneType;
    dateOfRelease: Date;
    lifetime: number;
}
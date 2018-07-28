import { PlaneType } from "./planetype";

export class Plane {
    id: number;
    name: string;
    planeType: PlaneType;
    dateOfRelease: Date;
    lifetime: number;
}
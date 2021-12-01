import { Bus } from "./bus.model";
import { Seat } from "./seat.model";
import { Journey_Route } from "./route.model";

export class Journey {
    bus!:Bus;
    seats!:Seat[];
    fare!:number;
    journey_route!:Journey_Route
}

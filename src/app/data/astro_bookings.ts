import * as data from "../../assets/astro_bookings.json";
import { Operator } from "../models/operator";
import { Trip } from "../models/trip";

export const OPERATORS: Operator[] = data.operators as unknown as Operator[];
export const TRIPS: Trip[] = data.trips as unknown as Trip[];
export const BOOKINGS: any[] = data.bookings as unknown as any[];

import * as data from "../../assets/astro_bookings.json";
import { Trip } from "../models/trip";

export const TRIPS: Trip[] = data.trips as unknown as Trip[];

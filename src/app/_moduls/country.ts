import { Coordinates } from "./coordinates";
import { Latestdata } from "./latestdata";
import { Timeline } from "./Timeline";
import { Today } from "./today";

export interface Country {
  coordinates: Coordinates;
  name?: string;
  code?: string;
  population?: number;
  updated_at?: Date;
  today?: Today;
  latest_data?: Latestdata;
  timeline?: Timeline[];
}

import { Calculated } from "./calculated";

export interface Latestdata {
  deaths: number;
  confirmed: number;
  recovered: number;
  critical: number;
  calculated: Calculated;
}

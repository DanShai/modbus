import { Entry } from "./entry";
/**
 * registers information and their data types
 * page 39-42 of the provided doc manual!
 * I formated the data to entries, since there are
 * 100s of registers, would be better to store
 * the data in a database and fetch it from there
 * or flat file?! or just a file like this one! store the hell
 * in a const :)
 * I did it this way because it will make it easier for
 * my decoding algorithm.
 * for this task, no need to decode all the 100 registers because
 *  it needs that I put below 100 "Entry" (entries)! but I took some
 * given that I cover all data types (BIT,LONG.REAL4..) for
 * proof of cencept! we can add later the other entries!
 */
export const manual = [
  new Entry(5, 5, 2, "Velocity", "REAL4", "m/s"),
  new Entry(6, 5, 2, "Velocity", "REAL4", "m/s"),
  new Entry(21, 21, 2, "Neg Energy", "LONG", "None"),
  new Entry(22, 21, 2, "Neg Energy", "LONG", "None"),
  new Entry(33, 33, 2, "Temprature", "REAL4", "degree"),
  new Entry(34, 33, 2, "Temprature", "REAL4", "degree"),
  new Entry(45, 45, 2, "Current", "REAL4", "mA"),
  new Entry(46, 45, 2, "Current", "REAL4", "mA"),
  new Entry(53, 53, 3, "Date", "BCD", "date"),
  new Entry(54, 53, 3, "Date", "BCD", "date"),
  new Entry(55, 53, 3, "Date", "BCD", "date"),
  new Entry(83, 83, 2, "Dt Travel", "REAL4", "nS"),
  new Entry(84, 83, 2, "Dt Travel", "REAL4", "nS"),
  new Entry(72, 72, 1, "Error Code", "BIT", "None"),
  new Entry(92, 92, 1, "SNR", "INTEGER", "%"),
  new Entry(97, 97, 2, "Travel Time", "REAL4", "None"),
  new Entry(98, 97, 2, "Travel Time", "REAL4", "None")
];

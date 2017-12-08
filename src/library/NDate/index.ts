import NDateAdd from "./ndate.add";
import NDateSub from "./ndate.sub";
import {BasicDate} from "../BasicDate";
import {NDateInterface, NDateConstructor} from "../../Interfaces/NDate";

/**
 * Apply mixins of all available additional functionality
 * @see https://blog.mariusschulz.com/2017/05/26/typescript-2-2-mixin-classes
 * @type {NDateConstructor}
 */
const NDatePrototype: NDateConstructor = NDateSub(
  NDateAdd(
    BasicDate
  )
) as any;

/**
 * NDate class with all required methods implementation
 */
class NDate extends NDatePrototype implements NDateInterface {
  /**
   * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
   * @param s A date string
   * @param {string} s
   * @returns {number}
   */
  public static parse(s: string): number {
    return Date.parse(s);
  };

  /**
   * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
   * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
   * @param month The month as an number between 0 and 11 (January to December).
   * @param date The date as an number between 1 and 31.
   * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
   * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
   * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
   * @param ms An number from 0 to 999 that specifies the milliseconds.
   * @returns {number}
   * @constructor
   */
  static UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number {
    return Date.UTC(year, month, date, hours, minutes, seconds, ms);
  };

  /**
   * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
   * @returns {number}
   */
  static now(): number {
    return Date.now();
  };
}

export {
  NDate as Date,
}
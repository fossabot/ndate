import {BasicDate} from "../library/BasicDate";
import {NDate} from "./NDate";

interface Constructor extends DateConstructor {
  /**
   * Creates new NDate object without parameters
   * @returns {NDate}
   */
  new(): NDate;

  /**
   * Using milliseconds to create new NDate object
   * @param {number} value
   * @returns {NDate}
   */
  new(value: number): NDate;

  /**
   * Using string to create new NDate object
   * @param {string} value
   * @returns {NDate}
   */
  new(value: string): NDate;

  /**
   * Use Date or NDate object to create new NDate object
   * @param {NDate | BasicDate | Date} value
   * @returns {NDate}
   */
  new(value: NDate | BasicDate | Date): NDate;

  /**
   * Using legacy raw values for create NDate Object
   * @param {number} year
   * @param {number} month
   * @param {number} date
   * @param {number} hours
   * @param {number} minutes
   * @param {number} seconds
   * @param {number} ms
   * @returns {NDate}
   */
  new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): NDate;

  /**
   * Functional part constructor using
   * @returns {string}
   */
  (): string;

  prototype: NDate;

  /**
   * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
   * @param s A date string
   */
  parse(s: string): number;

  /**
   * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
   * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
   * @param month The month as an number between 0 and 11 (January to December).
   * @param date The date as an number between 1 and 31.
   * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
   * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
   * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
   * @param ms An number from 0 to 999 that specifies the milliseconds.
   */
  UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;

  now(): number;
}

export {
  Constructor,
}
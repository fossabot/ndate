import NDateAdd from "./ndate.add";
import NDateSub from "./ndate.sub";
import {BasicDate} from "../BasicDate";
import {Constructor} from "../../Interfaces/Constructor";
import {NDate as INDate} from "../../Interfaces/NDate";

/**
 * Apply mixins of all available additional functionality
 * @see https://blog.mariusschulz.com/2017/05/26/typescript-2-2-mixin-classes
 * @type {Constructor}
 */
const NDatePrototype: Constructor = NDateSub(
  NDateAdd(
    BasicDate
  )
) as any;

/**
 * Implementation of function part for DateConstructor interface
 */
const funcPart = function (year?: number | string, month?: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date | string {
  // called as function
  if (typeof new.target === 'undefined') {
    return Date();
  }

  // called as constructor with no arguments
  if (typeof year === 'undefined') {
    return new NDatePrototype();
  }

  // called as constructor with string value argument
  if (typeof year === 'string') {
    return new NDatePrototype(year);
  }

  // called as constructor with number value argument
  if (typeof month === 'undefined') {
    return new NDatePrototype(year);
  }

  // called as constructor with year, month, date, etc arguments:
  return new NDatePrototype(year, month, date, hours, minutes, seconds, ms);
} as Constructor;

/**
 * That definition means the class constructor is also a callable function with no arguments that returns a string when
 * called without new. You can't use a ES2015-or-later class and adhere to the specification, since it would need to
 * throw a TypeError upon being called without new. Instead you can return a function that detects being called with
 * new, with extra properties added to implement static methods.
 */
const NDate: Constructor = Object.assign(funcPart, {
  /**
   * DateConstructor instance by merging the functional part with something that implements static methods
   */
  prototype: NDatePrototype.prototype as INDate,
  /**
   * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
   * @param s A date string
   * @param {string} s
   * @returns {number}
   */
  parse(s: string): number {
    return Date.parse(s);
  },

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
  UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number {
    return Date.UTC(year, month, date, hours, minutes, seconds, ms);
  },

  /**
   * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
   * @returns {number}
   */
  now(): number {
    return Date.now();
  }
});

export {
  NDate as Date,
}
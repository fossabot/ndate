import * as moment from 'moment';
import {isNullOrUndefined} from "util";

class BasicDate implements Date {
  /**
   * Current state of date object
   */
  protected date: moment.Moment;

  /**
   * Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "default"): string;

  /**
   * Converts a Date object to a string.
   */
  [Symbol.toPrimitive](hint: "string"): string;

  /**
   * Converts a Date object to a number.
   */
  [Symbol.toPrimitive](hint: "number"): number;

  /**
   * Converts a Date object to a string or number.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   *
   * @param hint The strings "number", "string", or "default" to specify what primitive to return.
   *
   * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".
   * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".
   */
  [Symbol.toPrimitive](hint: string): string | number {
    if ((hint === "default" || hint === "string") && this.toString) {
      return this.toString();
    }

    if (hint === "number" && this.valueOf) {
      return this.valueOf();
    }

    throw TypeError(`Called wrong hint type "${hint}"`);
  }

  /**
   * Coverage for native Date object constructor
   */
  public constructor();
  public constructor(value?: number);
  public constructor(value?: string);
  public constructor(value?: Date | BasicDate);
  public constructor(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
  public constructor(...value: any[]) {
    // if we do not have arguments it's means create current date object
    if (value.length === 0) {
      this.date = moment();
    }

    // try to parse only one argument
    if (value.length === 1) {
        this.date = moment(new Date(value[0].valueOf()));
    }

    // if we have more than one argument
    if (value.length > 1) {
      const [year, month, date, hours, minutes, seconds, ms] = value;
      this.date = moment(new Date(year, month, date, hours, minutes, seconds, ms));
    }
  }

  /**
   * Returns a string representation of a date. The format of the string depends on the locale.
   * @returns {string}
   */
  public toString(): string {
    return this.date.toDate().toString();
  };

  /**
   * Returns a date as a string value.
   * @returns {string}
   */
  public toDateString(): string {
    return this.date.toDate().toDateString();
  }

  /**
   * Returns a time as a string value.
   * @returns {string}
   */
  public toTimeString(): string {
    return this.date.toDate().toTimeString();
  }

  /**
   * Returns a value as a string value appropriate to the host environment's current locale.
   * @returns {string}
   */
  public toLocaleString(): string {
    return this.date.toDate().toLocaleString();
  }

  /**
   * Returns a date as a string value appropriate to the host environment's current locale.
   * @returns {string}
   */
  public toLocaleDateString(): string {
    return this.date.toDate().toLocaleDateString();
  }

  /**
   * Returns a time as a string value appropriate to the host environment's current locale.
   * @returns {string}
   */
  public toLocaleTimeString(): string {
    return this.date.toDate().toLocaleTimeString();
  }

  /**
   * Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   * @returns {number}
   */
  public valueOf(): number {
    return this.date.toDate().valueOf();
  }

  /**
   * Gets the time value in milliseconds.
   * @returns {number}
   */
  public getTime(): number {
    return this.date.toDate().getTime();
  }

  /**
   * Gets the year, using local time.
   * @returns {number}
   */
  public getFullYear(): number {
    return this.date.toDate().getFullYear();
  }

  /**
   * Gets the year using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCFullYear(): number {
    return this.date.toDate().getUTCFullYear();
  }

  /**
   * Gets the month, using local time.
   * @returns {number}
   */
  public getMonth(): number {
    return this.date.toDate().getMonth();
  }

  /**
   * Gets the month of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCMonth(): number {
    return this.date.toDate().getUTCMonth();
  }

  /**
   * Gets the day-of-the-month, using local time.
   * @returns {number}
   */
  public getDate(): number {
    return this.date.toDate().getDate();
  }

  /**
   * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCDate(): number {
    return this.date.toDate().getUTCDate();
  }

  /**
   * Gets the day of the week, using local time.
   * @returns {number}
   */
  public getDay(): number {
    return this.date.toDate().getDay();
  }

  /**
   * Gets the day of the week using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCDay(): number {
    return this.date.toDate().getUTCDay();
  }

  /**
   * Gets the hours in a date, using local time.
   * @returns {number}
   */
  public getHours(): number {
    return this.date.toDate().getHours();
  }

  /**
   * Gets the hours value in a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCHours(): number {
    return this.date.toDate().getUTCHours();
  }

  /**
   * Gets the minutes of a Date object, using local time.
   * @returns {number}
   */
  public getMinutes(): number {
    return this.date.toDate().getMinutes();
  }

  /**
   * Gets the minutes of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCMinutes(): number {
    return this.date.toDate().getUTCMinutes();
  }

  /**
   * Gets the seconds of a Date object, using local time.
   * @returns {number}
   */
  public getSeconds(): number {
    return this.date.toDate().getSeconds();
  }

  /**
   * Gets the seconds of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCSeconds(): number {
    return this.date.toDate().getUTCSeconds();
  }

  /**
   * Gets the milliseconds of a Date, using local time.
   * @returns {number}
   */
  public getMilliseconds(): number {
    return this.date.toDate().getMilliseconds();
  }

  /**
   * Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCMilliseconds(): number {
    return this.date.toDate().getUTCMilliseconds();
  }

  /**
   * Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getTimezoneOffset(): number {
    return this.date.toDate().getTimezoneOffset();
  }

  /**
   * Sets the date and time value in the Date object.
   * @param {number} time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setTime(time: number): number {
    this.date = moment(time);
    return this.date.valueOf();
  }

  /**
   * Sets the milliseconds value in the Date object using local time.
   * @param {number} ms A numeric value equal to the millisecond value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setMilliseconds(ms: number): number {
    this.date.set('milliseconds', ms);
    return this.date.valueOf();
  }

  /**
   * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} ms A numeric value equal to the millisecond value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCMilliseconds(ms: number): number {
    this.date.utc();

    this.date.set('milliseconds', ms);

    this.date.local();
    return this.date.valueOf();
  }

  /**
   * Sets the seconds value in the Date object using local time.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setSeconds(sec: number, ms?: number): number {
    this.date.set('seconds', sec);
    isNullOrUndefined(ms) || this.date.set('milliseconds', ms);

    return this.date.valueOf();
  }

  /**
   * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCSeconds(sec: number, ms?: number): number {
    this.date.utc();

    this.date.set('seconds', sec);
    isNullOrUndefined(ms) || this.date.set('milliseconds', ms);

    this.date.local();
    return this.date.valueOf();
  }

  /**
   * Sets the minutes value in the Date object using local time.
   * @param {number} min A numeric value equal to the minutes value.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setMinutes(min: number, sec?: number, ms?: number): number {
    this.date.set('minutes', min);
    isNullOrUndefined(sec) || this.date.set('seconds', sec);
    isNullOrUndefined(ms) || this.date.set('milliseconds', ms);

    return this.date.valueOf();
  }

  /**
   * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} min A numeric value equal to the minutes value.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCMinutes(min: number, sec?: number, ms?: number): number {
    this.date.utc();

    this.date.set('minutes', min);
    isNullOrUndefined(sec) || this.date.set('seconds', sec);
    isNullOrUndefined(ms) || this.date.set('milliseconds', ms);

    this.date.local();
    return this.date.valueOf();
  }

  /**
   * Sets the hour value in the Date object using local time.
   * @param {number} hours A numeric value equal to the hours value.
   * @param {number} min A numeric value equal to the minutes value.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setHours(hours: number, min?: number, sec?: number, ms?: number): number {
    this.date.set('hours', hours);
    isNullOrUndefined(min) || this.date.set('minutes', min);
    isNullOrUndefined(sec) || this.date.set('seconds', sec);
    isNullOrUndefined(ms) || this.date.set('milliseconds', ms);

    return this.date.valueOf();
  }

  /**
   * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} hours A numeric value equal to the hours value.
   * @param {number} min A numeric value equal to the minutes value.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number {
    this.date.utc();

    this.date.set('hours', hours);
    isNullOrUndefined(min) || this.date.set('minutes', min);
    isNullOrUndefined(sec) || this.date.set('seconds', sec);
    isNullOrUndefined(ms) || this.date.set('milliseconds', ms);
    this.date.local();

    return this.date.valueOf();
  }

  /**
   * Sets the numeric day-of-the-month value of the Date object using local time.
   * @param {number} date A numeric value equal to the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setDate(date: number): number {
    this.date.set('date', date);

    return this.date.valueOf();
  }

  /**
   * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
   * @param {number} date A numeric value equal to the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCDate(date: number): number {
    this.date.utc();

    this.date.set('date', date);

    this.date.local();
    return this.date.valueOf();
  }

  /**
   * Sets the month value in the Date object using local time.
   * @param {number} month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param {number} date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setMonth(month: number, date?: number): number {
    this.date.set('month', month);
    isNullOrUndefined(date) || this.date.set('date', date);

    return this.date.valueOf();
  }

  /**
   * Sets the month value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param {number} date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCMonth(month: number, date?: number): number {
    this.date.utc();

    this.date.set('month', month);
    isNullOrUndefined(date) || this.date.set('date', date);

    this.date.local();
    return this.date.valueOf();
  }

  /**
   * Sets the year of the Date object using local time.
   * @param {number} year A numeric value for the year.
   * @param {number} month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
   * @param {number} date A numeric value equal for the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setFullYear(year: number, month?: number, date?: number): number {
    this.date.set('year', year);
    isNullOrUndefined(month) || this.date.set('month', month);
    isNullOrUndefined(date) || this.date.set('date', date);

    return this.date.valueOf();
  }

  /**
   * Sets the year value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} year A numeric value equal to the year.
   * @param {number} month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
   * @param {number} date A numeric value equal to the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCFullYear(year: number, month?: number, date?: number): number {
    this.date.utc();

    this.date.set('year', year);
    isNullOrUndefined(month) || this.date.set('month', month);
    isNullOrUndefined(date) || this.date.set('date', date);

    this.date.local();
    return this.date.valueOf();
  }

  /**
   * Returns a date converted to a string using Universal Coordinated Time (UTC).
   * @returns {string}
   */
  public toUTCString(): string {
    return this.date.toDate().toUTCString();
  }

  /**
   * Returns a date as a string value in ISO format.
   * @returns {string}
   */
  public toISOString(): string {
    return this.date.toDate().toISOString();
  }

  /**
   * Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
   * @param key
   * @returns {string}
   */
  public toJSON(key?: any): string {
    return this.date.toDate().toJSON(key);
  }
}

export {
  BasicDate,
}

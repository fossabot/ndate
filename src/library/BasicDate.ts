class BasicDateClass implements Date {
  /**
   * Current state of date object
   */
  protected date: Date;

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
  public constructor(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
  public constructor(...value: any[]) {
    // if we do not have arguments it's means create current date object
    if (arguments.length === 0) {
      this.date = new Date();
    }

    // try to parse only one argument
    if (arguments.length === 1) {
      this.date = new Date(arguments[0]);
    }

    // if we have more than one argument
    if (arguments.length > 1) {
      const [year, month, date, hours, minutes, seconds, ms] = value;
      this.date = new Date(year, month, date, hours, minutes, seconds, ms);
    }
  }

  /**
   * Returns a string representation of a date. The format of the string depends on the locale.
   * @returns {string}
   */
  public toString(): string {
    return this.date.toString();
  };

  /**
   * Returns a date as a string value.
   * @returns {string}
   */
  public toDateString(): string {
    return this.date.toDateString();
  }

  /**
   * Returns a time as a string value.
   * @returns {string}
   */
  public toTimeString(): string {
    return this.date.toTimeString();
  }

  /**
   * Returns a value as a string value appropriate to the host environment's current locale.
   * @returns {string}
   */
  public toLocaleString(): string {
    return this.date.toLocaleString();
  }

  /**
   * Returns a date as a string value appropriate to the host environment's current locale.
   * @returns {string}
   */
  public toLocaleDateString(): string {
    return this.date.toLocaleDateString();
  }

  /**
   * Returns a time as a string value appropriate to the host environment's current locale.
   * @returns {string}
   */
  public toLocaleTimeString(): string {
    return this.date.toLocaleTimeString();
  }

  /**
   * Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
   * @returns {number}
   */
  public valueOf(): number {
    return this.date.valueOf();
  }

  /**
   * Gets the time value in milliseconds.
   * @returns {number}
   */
  public getTime(): number {
    return this.date.getTime();
  }

  /**
   * Gets the year, using local time.
   * @returns {number}
   */
  public getFullYear(): number {
    return this.date.getFullYear();
  }

  /**
   * Gets the year using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCFullYear(): number {
    return this.date.getUTCFullYear();
  }

  /**
   * Gets the month, using local time.
   * @returns {number}
   */
  public getMonth(): number {
    return this.date.getMonth();
  }

  /**
   * Gets the month of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCMonth(): number {
    return this.date.getUTCMonth();
  }

  /**
   * Gets the day-of-the-month, using local time.
   * @returns {number}
   */
  public getDate(): number {
    return this.date.getDate();
  }

  /**
   * Gets the day-of-the-month, using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCDate(): number {
    return this.date.getUTCDate();
  }

  /**
   * Gets the day of the week, using local time.
   * @returns {number}
   */
  public getDay(): number {
    return this.date.getDay();
  }

  /**
   * Gets the day of the week using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCDay(): number {
    return this.date.getUTCDay();
  }

  /**
   * Gets the hours in a date, using local time.
   * @returns {number}
   */
  public getHours(): number {
    return this.date.getHours();
  }

  /**
   * Gets the hours value in a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCHours(): number {
    return this.date.getUTCHours();
  }

  /**
   * Gets the minutes of a Date object, using local time.
   * @returns {number}
   */
  public getMinutes(): number {
    return this.date.getMinutes();
  }

  /**
   * Gets the minutes of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCMinutes(): number {
    return this.date.getUTCMinutes();
  }

  /**
   * Gets the seconds of a Date object, using local time.
   * @returns {number}
   */
  public getSeconds(): number {
    return this.date.getSeconds();
  }

  /**
   * Gets the seconds of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCSeconds(): number {
    return this.date.getUTCSeconds();
  }

  /**
   * Gets the milliseconds of a Date, using local time.
   * @returns {number}
   */
  public getMilliseconds(): number {
    return this.date.getMilliseconds();
  }

  /**
   * Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getUTCMilliseconds(): number {
    return this.date.getUTCMilliseconds();
  }

  /**
   * Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
   * @returns {number}
   */
  public getTimezoneOffset(): number {
    return this.date.getTimezoneOffset();
  }

  /**
   * Sets the date and time value in the Date object.
   * @param {number} time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setTime(time: number): number {
    return this.date.setTime(time);
  }

  /**
   * Sets the milliseconds value in the Date object using local time.
   * @param {number} ms A numeric value equal to the millisecond value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setMilliseconds(ms: number): number {
    return this.date.setMilliseconds(ms);
  }

  /**
   * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} ms A numeric value equal to the millisecond value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCMilliseconds(ms: number): number {
    return this.date.setUTCMilliseconds(ms);
  }

  /**
   * Sets the seconds value in the Date object using local time.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setSeconds(sec: number, ms?: number): number {
    return this.date.setSeconds(sec, ms);
  }

  /**
   * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCSeconds(sec: number, ms?: number): number {
    return this.date.setUTCSeconds(sec, ms);
  }

  /**
   * Sets the minutes value in the Date object using local time.
   * @param {number} min A numeric value equal to the minutes value.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setMinutes(min: number, sec?: number, ms?: number): number {
    return this.date.setMinutes(min, sec, ms);
  }

  /**
   * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} min A numeric value equal to the minutes value.
   * @param {number} sec A numeric value equal to the seconds value.
   * @param {number} ms A numeric value equal to the milliseconds value.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCMinutes(min: number, sec?: number, ms?: number): number {
    return this.date.setUTCMinutes(min, sec, ms);
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
    return this.date.setHours(hours, min, sec, ms);
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
    return this.date.setUTCHours(hours, min, sec, ms);
  }

  /**
   * Sets the numeric day-of-the-month value of the Date object using local time.
   * @param {number} date A numeric value equal to the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setDate(date: number): number {
    return this.date.setDate(date);
  }

  /**
   * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
   * @param {number} date A numeric value equal to the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCDate(date: number): number {
    return this.date.setUTCDate(date);
  }

  /**
   * Sets the month value in the Date object using local time.
   * @param {number} month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param {number} date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setMonth(month: number, date?: number): number {
    return this.date.setMonth(month, date);
  }

  /**
   * Sets the month value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param {number} date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCMonth(month: number, date?: number): number {
    return this.date.setUTCMonth(month, date);
  }

  /**
   * Sets the year of the Date object using local time.
   * @param {number} year A numeric value for the year.
   * @param {number} month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
   * @param {number} date A numeric value equal for the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 GMT.
   */
  public setFullYear(year: number, month?: number, date?: number): number {
    return this.date.setFullYear(year, month, date);
  }

  /**
   * Sets the year value in the Date object using Universal Coordinated Time (UTC).
   * @param {number} year A numeric value equal to the year.
   * @param {number} month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
   * @param {number} date A numeric value equal to the day of the month.
   * @returns {number} new value in milliseconds since midnight, January 1, 1970 using Universal Coordinated Time (UTC).
   */
  public setUTCFullYear(year: number, month?: number, date?: number): number {
    return this.date.setUTCFullYear(year, month, date);
  }

  /**
   * Returns a date converted to a string using Universal Coordinated Time (UTC).
   * @returns {string}
   */
  public toUTCString(): string {
    return this.date.toUTCString();
  }

  /**
   * Returns a date as a string value in ISO format.
   * @returns {string}
   */
  public toISOString(): string {
    return this.date.toISOString();
  }

  /**
   * Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
   * @param key
   * @returns {string}
   */
  public toJSON(key?: any): string {
    return this.date.toJSON(key);
  }
}

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
    return new BasicDateClass();
  }

  // called as constructor with string value argument
  if (typeof year === 'string') {
    return new BasicDateClass(year);
  }

  // called as constructor with number value argument
  if (typeof month === 'undefined') {
    return new BasicDateClass(year);
  }

  // called as constructor with year, month, date, etc arguments:
  return new BasicDateClass(year, month, date, hours, minutes, seconds, ms);
} as {
  new(): BasicDateClass;
  new(value: number): BasicDateClass;
  new(value: string): BasicDateClass;
  new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): BasicDateClass;
  (): string;
};

/**
 * That definition means the class constructor is also a callable function with no arguments that returns a string when
 * called without new. You can't use a ES2015-or-later class and adhere to the specification, since it would need to
 * throw a TypeError upon being called without new. Instead you can return a function that detects being called with
 * new, with extra properties added to implement static methods.
 */
const BasicDate: DateConstructor = Object.assign(funcPart, {
  /**
   * DateConstructor instance by merging the functional part with something that implements static methods
   */
  prototype: BasicDateClass.prototype,
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
  BasicDate,
  BasicDateClass,
}
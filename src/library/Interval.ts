import {Interval as IntervalInterface} from "../Interfaces/Interval";

/**
 * Allowed characters for formatting interval into string
 * @type {string[]}
 */
const controllingCharacters: string[] = ['Y', 'y', 'M', 'm', 'D', 'd', 'H', 'h', 'I', 'i', 'S', 's', 'F', 'f', 'R', 'r'];

/**
 * Basic interval class
 */
class Interval implements IntervalInterface {
  /**
   * Difference in milliseconds between two dates
   */
  public readonly milliseconds: number;
  /**
   * Difference in seconds between two dates
   */
  public readonly seconds: number;
  /**
   * Difference in minutes between two dates
   */
  public readonly minutes: number;
  /**
   * Difference in hours between two dates
   */
  public readonly hours: number;
  /**
   * Difference in days between two dates
   */
  public readonly days: number;
  /**
   * Difference in months between two dates
   */
  public readonly months: number;
  /**
   * Difference in years between two dates
   */
  public readonly years: number;
  /**
   * Is that date are reversed
   * @type {boolean}
   */
  public readonly reverse: boolean;

  /**
   * Constructor required for updating readonly properties
   * @param {number} years
   * @param {number} months
   * @param {number} days
   * @param {number} hours
   * @param {number} minutes
   * @param {number} seconds
   * @param {number} milliseconds
   * @param {boolean} reverse
   */
  constructor(years: number, months: number, days: number, hours: number, minutes: number, seconds: number, milliseconds: number, reverse: boolean) {
    this.years = years;
    this.months = months;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
    this.reverse = reverse;
  }

  /**
   * Formatting interval to requested format
   * @param {string} format
   * @returns {string}
   */
  public format(format: string): string {
    let formatted: string = '';

    for (let i = 0, len = format.length; i < len; i++) {

      // if we have escaped percent symbol, skip analyzing of that 2 char
      if (format[i] === '\\' && format[i + 1] && format[i + 1] === '%') {
        formatted += '%' + format[i + 2];
        i += 2;
        continue;
      }

      // if we have controlling sequence, we should replace it by correct data
      if (format[i] === '%' && format[i + 1] && controllingCharacters.indexOf(format[i + 1]) >= 0) {
        formatted += format[i + 1]
          .replace('Y', this.years.toString())
          .replace('y', this.years < 100 ? Interval._pad(this.years, 2) : `${this.years.toString()[this.years.toString().length - 2]}${this.years.toString()[this.years.toString().length - 1]}`)
          .replace('M', Interval._pad(this.months, 2))
          .replace('m', this.months.toString())
          .replace('D', Interval._pad(this.days, 2))
          .replace('d', this.days.toString())
          .replace('H', Interval._pad(this.hours, 2))
          .replace('h', this.hours.toString())
          .replace('I', Interval._pad(this.minutes, 2))
          .replace('i', this.minutes.toString())
          .replace('S', Interval._pad(this.seconds, 2))
          .replace('s', this.seconds.toString())
          .replace('F', Interval._pad(this.milliseconds < 1000 ? this.milliseconds : Math.round(this.milliseconds / 100) * 100, 3))
          .replace('f', this.milliseconds.toString())
          .replace('R', this.reverse ? '-' : '+')
          .replace('r', this.reverse ? '-' : '');

        i += 1;
        continue;
      }

      formatted += format[i];
    }

    return formatted;
  }

  /**
   * Padding lead character to the lead position
   * @param {number} num
   * @param {number} places
   * @param {string} char
   * @returns {string}
   * @private
   */
  protected static _pad(num: number, places: number, char: string = '0'): string {
    num = Math.round(num);

    if (num.toString().length >= places.toString().length + 1) {
      return num.toString().slice(0, places);
    }

    let zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join(char) + num;
  }
}

/**
 * Absolute interval between two dates.
 *
 * For example difference between two dates like "2017-01-01T00:00:00.000Z" and "2018-01-01T00:00:00.000Z" will be:
 * years: 1, months: 12, days: 366, hours: 8784, minutes: 527040, seconds: 31622400, milliseconds: 31622400000
 */
class Absolute extends Interval {
  public constructor(beginDate: Date, endDate: Date) {
    let diff = Math.abs(endDate.getTime() - beginDate.getTime());

    const reverse = beginDate > endDate;
    const milliseconds = diff;
    const seconds = Math.ceil(diff / 1000);
    const minutes = Math.ceil(diff / (1000 * 60));
    const hours = Math.ceil(diff / (1000 * 60 * 60));
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const months = Math.abs((endDate.getFullYear() - beginDate.getFullYear()) * 12) + Math.abs(endDate.getMonth() - beginDate.getMonth());
    const years = Math.abs(endDate.getFullYear() - beginDate.getFullYear());

    super(years, months, days, hours, minutes, seconds, milliseconds, reverse);
  }
}

/**
 * Relative interval between two dates.
 *
 * For example difference between two dates like "2000-01-01T00:00:00.000Z" and "2001-03-04T04:05:06.007Z" will be:
 * years: 1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6, milliseconds: 7
 */
class Relative extends Interval {
  public constructor(beginDate: Date, endDate: Date) {
    let tempDate: Date = beginDate;
    let reverse = false;
    if (beginDate > endDate) {
      beginDate = endDate;
      endDate = tempDate;
      reverse = true;
    }

    tempDate = new Date(beginDate);

    function doCompare(from, end, what) {
      let ret = -1;
      while (from <= end) {
        ret++;
        from['set' + what](from['get' + what]() + 1);
      }
      from['set' + what](from['get' + what]() - 1);
      return ret;
    }

    const years = doCompare(tempDate, endDate, 'FullYear');
    const months = doCompare(tempDate, endDate, 'Month');
    const days = doCompare(tempDate, endDate, 'Date');
    const hours = doCompare(tempDate, endDate, 'Hours');
    const minutes = doCompare(tempDate, endDate, 'Minutes');
    const seconds = doCompare(tempDate, endDate, 'Seconds');
    const milliseconds = doCompare(tempDate, endDate, 'Time');

    super(years, months, days, hours, minutes, seconds, milliseconds, reverse);
  }
}

export {
  Absolute,
  Relative,
}
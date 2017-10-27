import {IBasicInterval} from "../Interfaces/Intervals";

const allowedFormatCharacters: string[] = ['Y', 'y', 'M', 'm', 'D', 'd', 'H', 'h', 'I', 'i', 'S', 's', 'F', 'f', 'R', 'r'];

class NBasicInterval implements IBasicInterval {
  /**
   * Difference in milliseconds between two dates
   */
  public milliseconds: number = 0;
  /**
   * Difference in seconds between two dates
   */
  public seconds: number = 0;
  /**
   * Difference in minutes between two dates
   */
  public minutes: number = 0;
  /**
   * Difference in hours between two dates
   */
  public hours: number = 0;
  /**
   * Difference in days between two dates
   */
  public days: number = 0;
  /**
   * Difference in months between two dates
   */
  public months: number = 0;
  /**
   * Difference in years between two dates
   */
  public years: number = 0;
  /**
   * Is that date are reversed
   * @type {boolean}
   */
  public reverse: boolean = false;

  /**
   * Constructor for easy create interval
   * @param {number} years
   * @param {number} months
   * @param {number} days
   * @param {number} hours
   * @param {number} minutes
   * @param {number} seconds
   * @param {number} milliseconds
   * @param {boolean} reverse
   */
  public constructor(years?: number, months?: number, days?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, reverse?: boolean) {
    this.years = years || 0;
    this.months = months || 0;
    this.days = days || 0;
    this.hours = hours || 0;
    this.minutes = minutes || 0;
    this.seconds = seconds || 0;
    this.milliseconds = milliseconds || 0;
    this.reverse = reverse || false;
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
      if (format[i] === '%' && format[i + 1] && allowedFormatCharacters.indexOf(format[i + 1]) >= 0) {
        formatted += format[i + 1]
          .replace('Y', this.years.toString())
          .replace('y', this.years < 100 ? NBasicInterval._pad(this.years, 2) : `${this.years.toString()[this.years.toString().length - 2]}${this.years.toString()[this.years.toString().length - 1]}`)
          .replace('M', NBasicInterval._pad(this.months, 2))
          .replace('m', this.months.toString())
          .replace('D', NBasicInterval._pad(this.days, 2))
          .replace('d', this.days.toString())
          .replace('H', NBasicInterval._pad(this.hours, 2))
          .replace('h', this.hours.toString())
          .replace('I', NBasicInterval._pad(this.minutes, 2))
          .replace('i', this.minutes.toString())
          .replace('S', NBasicInterval._pad(this.seconds, 2))
          .replace('s', this.seconds.toString())
          .replace('F', NBasicInterval._pad(this.milliseconds < 1000 ? this.milliseconds : Math.round(this.milliseconds / 100) * 100, 3))
          .replace('f', this.milliseconds.toString())
          .replace('R', this.reverse ? '+' : '-')
          .replace('r', this.reverse ? '' : '-');

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
 * years: 1, months: 12, days: 365, hours: 8760, minutes: 525600, seconds: 31536000, milliseconds: 31536000000
 */
class AbsoluteInterval extends NBasicInterval {

}

/**
 * Relative interval between two dates.
 *
 * For example difference between two dates like "2017-01-01T00:00:00.000Z" and "2018-03-04T04:05:06.007Z" will be:
 * years: 1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6, milliseconds: 7
 */
class RelativeInterval extends NBasicInterval {

}

export {
  NBasicInterval,
  AbsoluteInterval,
  RelativeInterval,
}
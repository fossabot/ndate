interface IBasicInterval {
  /**
   * Difference in milliseconds between two dates
   */
  milliseconds: number;
  /**
   * Difference in seconds between two dates
   */
  seconds: number;
  /**
   * Difference in minutes between two dates
   */
  minutes: number;
  /**
   * Difference in hours between two dates
   */
  hours: number;
  /**
   * Difference in days between two dates
   */
  days: number;
  /**
   * Difference in months between two dates
   */
  months: number;
  /**
   * Difference in years between two dates
   */
  years: number;
  /**
   * Is that date are reversed
   */
  reverse: boolean;

  /**
   * Formatting interval to requested format
   * @param {string} format
   * @returns {string}
   */
  format(format: string): string;
}

/**
 * Absolute interval between two dates.
 *
 * For example difference between two dates like "2017-01-01T00:00:00.000Z" and "2018-01-01T00:00:00.000Z" will be:
 * years: 1, months: 12, days: 365, hours: 8760, minutes: 525600, seconds: 31536000, milliseconds: 31536000000
 */
interface IAbsoluteInterval extends IBasicInterval {

}

/**
 * Relative interval between two dates.
 *
 * For example difference between two dates like "2017-01-01T00:00:00.000Z" and "2018-03-04T04:05:06.007Z" will be:
 * years: 1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6, milliseconds: 7
 */
interface IRelativeInterval extends IBasicInterval {

}

export {
  IBasicInterval,
  IAbsoluteInterval,
  IRelativeInterval,
}
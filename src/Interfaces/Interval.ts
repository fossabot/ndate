/**
 * Values of Interval interface
 */
interface Values {
  /**
   * Difference in milliseconds between two dates
   */
  readonly milliseconds: number;
  /**
   * Difference in seconds between two dates
   */
  readonly seconds: number;
  /**
   * Difference in minutes between two dates
   */
  readonly minutes: number;
  /**
   * Difference in hours between two dates
   */
  readonly hours: number;
  /**
   * Difference in days between two dates
   */
  readonly days: number;
  /**
   * Difference in months between two dates
   */
  readonly months: number;
  /**
   * Difference in years between two dates
   */
  readonly years: number;
  /**
   * Is that date are reversed
   */
  readonly reverse: boolean;
}

interface Interval extends Values {
  /**
   * Formatting interval to requested format
   * @param {string} format
   * @returns {string}
   */
  format(format: string): string;
}

export {
  Interval,
}
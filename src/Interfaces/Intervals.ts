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

export {
  IBasicInterval,
}
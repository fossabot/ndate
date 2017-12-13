import {BasicDate} from "../../library/basic-date";

interface NDateFormat extends BasicDate {
  /**
   * Formatting current date object based on formatting pattern
   * @param {string} format
   * @returns {string}
   */
  format(format: string): string;
}

export {
  NDateFormat,
}

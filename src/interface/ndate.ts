import {Absolute, Relative} from "../library/interval";
import {BasicDate} from "../library/basic-date";

interface NDateConstructor {
  /**
   * Creates new NDate object without parameters
   * @returns {NDate}
   */
  new(): NDateInterface;

  /**
   * Using milliseconds to create new NDate object
   * @param {number} value
   * @returns {NDate}
   */
  new(value: number): NDateInterface;

  /**
   * Using string to create new NDate object
   * @param {string} value
   * @returns {NDate}
   */
  new(value: string): NDateInterface;

  /**
   * Use Date or NDate object to create new NDate object
   * @param {NDate | BasicDate | Date} value
   * @returns {NDate}
   */
  new(value: NDateInterface | BasicDate | Date): NDateInterface;

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
  new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): NDateInterface;
}

interface NDateInterface extends BasicDate {
  /**
   * Add Absolute Interval object value to existed date object
   * @param {Absolute} interval Absolute Interval object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  add(interval: Absolute): NDateInterface;

  /**
   * Add Relative Interval object value to existed date object
   * @param {Relative} interval Relative Interval object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  add(interval: Relative): NDateInterface;

  /**
   * Subtract Absolute Interval object value from current object value
   * @param {Absolute} interval Absolute Interval object that value should be subtracted from current ndate object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  sub(interval: Absolute): NDateInterface;

  /**
   * Subtract Relative Interval object value from current object value
   * @param {Relative} interval Relative Interval object that value should be subtracted from current ndate object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  sub(interval: Relative): NDateInterface;
}

export {
  NDateInterface,
  NDateConstructor,
}
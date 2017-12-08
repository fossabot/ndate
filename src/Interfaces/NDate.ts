import {Absolute, Relative} from "../library/Interval";
import {BasicDate} from "../library/BasicDate";

interface NDate extends BasicDate {
  /**
   * Add Absolute Interval object value to existed date object
   * @param {Absolute} interval Absolute Interval object value
   * @returns {NDate} link to current object with updated date value
   */
  add(interval: Absolute): NDate;

  /**
   * Add Relative Interval object value to existed date object
   * @param {Relative} interval Relative Interval object value
   * @returns {NDate} link to current object with updated date value
   */
  add(interval: Relative): NDate;

  /**
   * Subtract Absolute Interval object value from current object value
   * @param {Absolute} interval Absolute Interval object that value should be subtracted from current NDate object value
   * @returns {NDate} link to current object with updated date value
   */
  sub(interval: Absolute): NDate;

  /**
   * Subtract Relative Interval object value from current object value
   * @param {Relative} interval Relative Interval object that value should be subtracted from current NDate object value
   * @returns {NDate} link to current object with updated date value
   */
  sub(interval: Relative): NDate;
}

export {
  NDate,
}
import {Absolute, Relative} from "../../library/interval";
import {BasicDate} from "../../library/basic-date";

interface NDateAdd extends BasicDate {
  /**
   * Add Absolute Interval object value to existed date object
   * @param {Absolute} interval Absolute Interval object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  add(interval: Absolute): NDateAdd;

  /**
   * Add Relative Interval object value to existed date object
   * @param {Relative} interval Relative Interval object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  add(interval: Relative): NDateAdd;
}

export {
  NDateAdd,
}

import {Absolute, Relative} from "../../library/interval";
import {BasicDate} from "../../library/basic-date";

interface NDateSub extends BasicDate {
  /**
   * Subtract Absolute Interval object value from current object value
   * @param {Absolute} interval Absolute Interval object that value should be subtracted from current ndate object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  sub(interval: Absolute): NDateSub;

  /**
   * Subtract Relative Interval object value from current object value
   * @param {Relative} interval Relative Interval object that value should be subtracted from current ndate object value
   * @returns {NDateInterface} link to current object with updated date value
   */
  sub(interval: Relative): NDateSub;
}

export {
  NDateSub,
}

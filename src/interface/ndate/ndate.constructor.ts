import {BasicDate} from "../../library/basic-date";
import {NDateInterface} from "./index";

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

export {
  NDateConstructor,
}
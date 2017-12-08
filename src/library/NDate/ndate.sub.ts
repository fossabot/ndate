import {Absolute, Relative} from "../Interval";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function <TBase extends Constructor>(Base: TBase) {
  return class NDateSub extends Base {
    /**
     * That property available in BasicDate
     */
    protected date: Date;

    /**
     * Subtract Absolute Interval object value from current object value
     * @param {Absolute} interval Absolute Interval object that value should be subtracted from current NDate object value
     * @returns {NDate} link to current object with updated date value
     */
    public sub(interval: Absolute): NDateSub;
    /**
     * Subtract Relative Interval object value from current object value
     * @param {Relative} interval Relative Interval object that value should be subtracted from current NDate object value
     * @returns {NDate} link to current object with updated date value
     */
    public sub(interval: Relative): NDateSub;
    /**
     * Subtract Interval object value from current object value
     * @param {Relative} interval Relative Interval object that value should be subtracted from current NDate object value
     * @returns {NDate} link to current object with updated date value
     */
    public sub(interval: Absolute | Relative): NDateSub {
      if (interval instanceof Absolute) {
        // if we have reversed interval, it require reverse all SUBTRACT operations sign
        const reverser = interval.reverse ? -1 : 1;

        this.date.setTime(this.date.getTime() - reverser * interval.milliseconds);
        return this;
      }

      if (interval instanceof Relative) {
        // if we have reversed interval, it require reverse all SUBTRACT operations sign
        const reverser = interval.reverse ? -1 : 1;

        interval.milliseconds && this.date.setUTCMilliseconds(this.date.getUTCMilliseconds() - reverser * interval.milliseconds);
        interval.seconds && this.date.setUTCSeconds(this.date.getUTCSeconds() - reverser * interval.seconds);
        interval.minutes && this.date.setUTCMinutes(this.date.getUTCMinutes() - reverser * interval.minutes);
        interval.hours && this.date.setUTCHours(this.date.getUTCHours() - reverser * interval.hours);
        interval.days && this.date.setUTCDate(this.date.getUTCDate() - reverser * interval.days);
        interval.months && this.date.setUTCMonth(this.date.getUTCMonth() - reverser * interval.months);
        interval.years && this.date.setUTCFullYear(this.date.getUTCFullYear() - reverser * interval.years);
        return this;
      }

      throw TypeError(`NDate.add method called with wrong parameter type ${typeof(interval)}`);
    }
  };
}
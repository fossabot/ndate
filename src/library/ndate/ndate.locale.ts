import {Locale} from "../locale";

type Constructor<T = {}> = new (...args: any[]) => T;

export default function <TBase extends Constructor>(Base: TBase) {
  return class NDateLocale extends Base {
    /**
     * Failover list of locales
     */
    protected locale: Locale[];

    /**
     * Get failover list of locales
     * @returns {Locale[]}
     */
    public getLocale(): Locale[] {
      return this.locale;
    }

    /**
     * Set failover list of locales
     * @param {Locale[]} value
     */
    public setLocale(value: Locale[]) {
      this.locale = value;
    }
  };
}

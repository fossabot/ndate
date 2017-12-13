import {BasicDate} from "../../library/basic-date";
import {Locale} from "../../library/locale";

interface NDateLocale extends BasicDate {
  /**
   * Get failover list of locales
   * @returns {Locale[]}
   */
  getLocale(): Locale[];

  /**
   * Set failover list of locales
   * @param {Locale[]} value
   */
  setLocale(value: Locale[]);
}

export {
  NDateLocale,
}

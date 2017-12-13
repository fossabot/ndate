import * as ILocale from "../interface/locale";

class Locale implements ILocale.Locale {
  /**
   * Code of current region settings using
   * @type {Code}
   */
  readonly locale: ILocale.Code;

  /**
   * Locale modifiers for current locale object
   */
  readonly modifiers: ILocale.Modifiers;

  /**
   * Detailed options for Intl.DateTimeFormat object
   */
  readonly options: ILocale.Options;

  /**
   * List of default locales
   */
  public static default: Locale[] = [];

  /**
   * Construction of Locale object
   * @param {Code} locale Code of current region settings using
   * @param {Modifiers} modifiers Locale modifiers for current locale object
   * @param {Options} options Detailed options for Intl.DateTimeFormat object
   */
  public constructor(locale: ILocale.Code, modifiers?: ILocale.Modifiers, options?: ILocale.Options) {
    this.locale = locale;
    this.modifiers = modifiers;
    this.options = options;
  };

  /**
   * Converting object into RFC5646 string
   * @returns {string}
   */
  public toString(): string {
    let tags: string[] = [];

    // check, is we have modifiers for apply
    if (this.modifiers) {

      for (let key in this.modifiers) {
        tags.push(`${key}-${this.modifiers[key]}`);
      }
    }

    // if we have modifiers for BCP47 string, apply it
    if (tags.length > 0) {
      return `${this.locale}-u-${tags.join('-')}`;
    }

    return this.locale;
  };
}

export {
  Locale,
}

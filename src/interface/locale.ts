/**
 * Code of current region settings using
 */
type Code = 'af-ZA' | 'am-ET' | 'ar-AE' | 'ar-BH' | 'ar-DZ' | 'ar-EG' |
  'ar-IQ' | 'ar-JO' | 'ar-KW' | 'ar-LB' | 'ar-LY' | 'ar-MA' |
  'arn-CL' | 'ar-OM' | 'ar-QA' | 'ar-SA' | 'ar-SY' | 'ar-TN' |
  'ar-YE' | 'as-IN' | 'az-Cyrl-AZ' | 'az-Latn-AZ' | 'ba-RU' |
  'be-BY' | 'bg-BG' | 'bn-BD' | 'bn-IN' | 'bo-CN' | 'br-FR' |
  'bs-Cyrl-BA' | 'bs-Latn-BA' | 'ca-ES' | 'co-FR' | 'cs-CZ' |
  'cy-GB' | 'da-DK' | 'de-AT' | 'de-CH' | 'de-DE' | 'de-LI' |
  'de-LU' | 'dsb-DE' | 'dv-MV' | 'el-GR' | 'en-029' | 'en-AU' |
  'en-BZ' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-IN' | 'en-JM' |
  'en-MY' | 'en-NZ' | 'en-PH' | 'en-SG' | 'en-TT' | 'en-US' |
  'en-ZA' | 'en-ZW' | 'es-AR' | 'es-BO' | 'es-CL' | 'es-CO' |
  'es-CR' | 'es-DO' | 'es-EC' | 'es-ES' | 'es-GT' | 'es-HN' |
  'es-MX' | 'es-NI' | 'es-PA' | 'es-PE' | 'es-PR' | 'es-PY' |
  'es-SV' | 'es-US' | 'es-UY' | 'es-VE' | 'et-EE' | 'eu-ES' |
  'fa-IR' | 'fi-FI' | 'fil-PH' | 'fo-FO' | 'fr-BE' | 'fr-CA' |
  'fr-CH' | 'fr-FR' | 'fr-LU' | 'fr-MC' | 'fy-NL' | 'ga-IE' |
  'gd-GB' | 'gl-ES' | 'gsw-FR' | 'gu-IN' | 'ha-Latn-NG' | 'he-IL' |
  'hi-IN' | 'hr-BA' | 'hr-HR' | 'hsb-DE' | 'hu-HU' | 'hy-AM' |
  'id-ID' | 'ig-NG' | 'ii-CN' | 'is-IS' | 'it-CH' | 'it-IT' |
  'iu-Cans-CA' | 'iu-Latn-CA' | 'ja-JP' | 'ka-GE' | 'kk-KZ' |
  'kl-GL' | 'km-KH' | 'kn-IN' | 'kok-IN' | 'ko-KR' | 'ky-KG' |
  'lb-LU' | 'lo-LA' | 'lt-LT' | 'lv-LV' | 'mi-NZ' | 'mk-MK' |
  'ml-IN' | 'mn-MN' | 'mn-Mong-CN' | 'moh-CA' | 'mr-IN' | 'ms-BN' |
  'ms-MY' | 'mt-MT' | 'nb-NO' | 'ne-NP' | 'nl-BE' | 'nl-NL' |
  'nn-NO' | 'nso-ZA' | 'oc-FR' | 'or-IN' | 'pa-IN' | 'pl-PL' |
  'prs-AF' | 'ps-AF' | 'pt-BR' | 'pt-PT' | 'qut-GT' | 'quz-BO' |
  'quz-EC' | 'quz-PE' | 'rm-CH' | 'ro-RO' | 'ru-RU' | 'rw-RW' |
  'sah-RU' | 'sa-IN' | 'se-FI' | 'se-NO' | 'se-SE' | 'si-LK' |
  'sk-SK' | 'sl-SI' | 'sma-NO' | 'sma-SE' | 'smj-NO' | 'smj-SE' |
  'smn-FI' | 'sms-FI' | 'sq-AL' | 'sr-Cyrl-BA' | 'sr-Cyrl-CS' |
  'sr-Cyrl-ME' | 'sr-Cyrl-RS' | 'sr-Latn-BA' | 'sr-Latn-CS' |
  'sr-Latn-ME' | 'sr-Latn-RS' | 'sv-FI' | 'sv-SE' | 'sw-KE' |
  'syr-SY' | 'ta-IN' | 'te-IN' | 'tg-Cyrl-TJ' | 'th-TH' | 'tk-TM' |
  'tn-ZA' | 'tr-TR' | 'tt-RU' | 'tzm-Latn-DZ' | 'ug-CN' | 'uk-UA' |
  'ur-PK' | 'uz-Cyrl-UZ' | 'uz-Latn-UZ' | 'vi-VN' | 'wo-SN' | 'xh-ZA' |
  'yo-NG' | 'zh-CN' | 'zh-HK' | 'zh-MO' | 'zh-SG' | 'zh-TW' | 'zu-ZA';

/**
 * Locale modifiers for generating correct locale string
 */
interface Modifiers {
  /**
   * Numbering system.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   */
  nu?: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' |
    'fullwide' | 'gujr' | 'guru' | 'hanidec' | 'khmr' | 'knda' |
    'laoo' | 'latn' | 'limb' | 'mlym' | 'mong' | 'mymr' | 'orya' |
    'tamldec' | 'telu' | 'thai' | 'tibt';

  /**
   * Calendar
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   */
  ca?: 'buddhist' | 'chinese' | 'coptic' | 'ethioaa' | 'ethiopic' |
    'gregory' | 'hebrew' | 'indian' | 'islamic' | 'islamicc' |
    'iso8601' | 'japanese' | 'persian' | 'roc';

  /**
   * Hour cycle
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   */
  hc?: 'h11' | 'h12' | 'h23' | 'h24';

  /**
   * Variant collations for certain locales
   *
   * The "standard" and "search" values are ignored; they are replaced by the options property usage
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
   */
  co?: 'big5han' | 'dict' | 'direct' | 'ducet' |
    'gb2312' | 'phonebk' | 'phonetic' | 'pinyin' | 'reformed' |
    'searchjl' | 'stroke' | 'trad' | 'unihan';

  /**
   * Whether numeric collation should be used, such that "1" < "2" < "10".
   * Possible values are "true" and "false". This option can be set through an options property or through a Unicode
   * extension key; if both are provided, the options property takes precedence.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
   */
  kn?: boolean;

  /**
   * Whether upper case or lower case should sort first.
   * Possible values are "upper", "lower", or "false" (use the locale's default).
   * This option can be set through an options property or through a Unicode extension key;
   * if both are provided, the options property takes precedence.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
   */
  kf?: "upper" | "lower" | "false";
}

/**
 * Detailed options for Intl.DateTimeFormat object
 */
interface Options {
  /**
   * The locale matching algorithm to use.
   * Possible values are "lookup" and "best fit"; the default is "best fit".
   * For information about this option, see the Intl page.
   */
  localeMatcher?: "lookup" | "best fit";
  /**
   * The time zone to use.
   * The only value implementations must recognize is "UTC"; the default is the runtime's default time zone.
   * Implementations may also recognize the time zone names of the IANA time zone database, such as "Asia/Shanghai",
   * "Asia/Kolkata", "America/New_York".
   */
  timeZone?: string;
  /**
   * Whether to use 12-hour time (as opposed to 24-hour time).
   * Possible values are true and false; the default is locale dependent.
   * This option overrides the hc language tag and/or the hourCycle option in case both are present.
   */
  hour12?: boolean;
  /**
   * The hour cycle to use. Possible values are "h11", "h12", "h23", or "h24".
   * This option overrides the hc language tag, if both are present, and the hour12 option takes
   * precedence in case both options have been specified.
   */
  hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
  /**
   * The format matching algorithm to use. Possible values are "basic" and "best fit"; the default is "best fit".
   * See the following paragraphs for information about the use of this property.
   *
   * @see http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher
   */
  formatMatcher?: "basic" | "best fit";
  /**
   * The representation of the weekday. Possible values are "narrow", "short", "long".
   */
  weekday?: 'narrow' | 'short' | 'long';
  /**
   * The representation of the era. Possible values are "narrow", "short", "long".
   */
  era?: 'narrow' | 'short' | 'long';
  /**
   * The representation of the year. Possible values are "numeric", "2-digit".
   */
  year?: 'numeric' | '2-digit';
  /**
   * The representation of the month. Possible values are "numeric", "2-digit", "narrow", "short", "long".
   */
  month?: 'narrow' | 'short' | 'long' | 'numeric' | '2-digit';
  /**
   * The representation of the day. Possible values are "numeric", "2-digit".
   */
  day?: 'numeric' | '2-digit';
  /**
   * The representation of the hour. Possible values are "numeric", "2-digit".
   */
  hour?: 'numeric' | '2-digit';
  /**
   * The representation of the minute. Possible values are "numeric", "2-digit".
   */
  minute?: 'numeric' | '2-digit';
  /**
   * The representation of the second. Possible values are "numeric", "2-digit".
   */
  second?: 'numeric' | '2-digit';
  /**
   * The representation of the time zone name. Possible values are "short", "long".
   */
  timeZoneName?: 'short' | 'long';
}

/**
 * Tag for Identifying Language.
 * @see https://tools.ietf.org/html/bcp47
 */
interface Locale {
  /**
   * Code of current region setting using
   * @type {Code}
   */
  locale: Code;

  /**
   * List of modifiers for locale BCP47 string
   */
  modifiers: Modifiers;

  /**
   * Converting object into RFC5646 string
   * @returns {string}
   */
  toString(): string;
}

export {
  Locale,
  Modifiers,
  Code,
  Options,
}
import {Locale} from "../locale";

type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * List of available modifiers for control characters
 * @type {string[]}
 */
const controllingCharacters: string[] = [
  'd', 'D', 'j', 'l', 'N', 'S', 'w', 'z',
  'W', 'F', 'm', 'M', 'n', 't', 'L', 'o',
  'Y', 'y', 'a', 'A', 'B', 'g', 'G', 'h',
  'H', 'i', 's', 'u', 'v', 'e', 'I', 'O',
  'P', 'T', 'Z', 'c', 'r', 'U'
];

/**
 * Receive English ordinal suffix, 2 characters
 * @param {Date} date
 * @returns {string}
 */
function englishOrdinalSuffix(date: Date) {
  switch (date.getDate()) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

/**
 * Calculate day of year
 * @param {Date} date
 * @returns {number}
 */
function dayOfYear(date: Date) {   // d is a Date object
  const d1 = new Date(date.getFullYear(), 0, 1, 12, 0, 0); // noon on Jan. 1
  const d2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0); // noon on input date
  return Math.round((d2.getTime() - d1.getTime()) / 864e5);
}

/* For a given date, get the ISO week number
 *
 * Based on information at:
 *
 *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
 *
 * Algorithm is to find nearest thursday, it's year
 * is the year of the week number. Then get weeks
 * between that date and the first day of that year.
 *
 * Note that dates in one year can be weeks of previous
 * or next year, overlap is up to 3 days.
 *
 * e.g. 2014/12/29 is Monday in week  1 of 2015
 *      2012/1/1   is Sunday in week 52 of 2011
 */
function getWeekNumber(d: Date): number {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

export default function <TBase extends Constructor>(Base: TBase) {
  return class NDateFormat extends Base {
    /**
     * That property available in BasicDate
     */
    protected date: Date;

    /**
     * That property available in NDateLocale
     */
    protected locale: Locale[];

    /**
     * Formatting current date object based on formatting pattern
     * @param {string} format
     * @returns {string}
     */
    public format(format: string): string {
      let formatted: string = '';

      for (let i = 0, len = format.length; i < len; i++) {
        // if we have escaped percent symbol, skip analyzing of that 2 char
        if (format[i] === '\\' && format[i + 1] && format[i + 1] === '%') {
          formatted += '%' + format[i + 2];
          i += 2;
          continue;
        }

        // converting Locale objects into BPC47 format strings
        const locale: Array<Locale> = (this.locale && this.locale.length > 0) ? this.locale : Locale.default;
        const locales: Array<string> = locale.map(data => data.toString());

        // current locales zero sign
        const zero: string = new Intl.NumberFormat(locales).format(0);

        // if we have controlling sequence, we should replace it by correct data
        if (format[i] === '%' && format[i + 1] && controllingCharacters.indexOf(format[i + 1]) >= 0) {

          switch (format[i + 1]) {
            case 'd':
              // Day of the month, 2 digits with leading zeros
              formatted += new Intl.DateTimeFormat(locales, {day: '2-digit'}).format(this.date);
              break;
            case 'D':
              // A textual representation of a day, three letters
              formatted += new Intl.DateTimeFormat(locales, {weekday: 'short'}).format(this.date);
              break;
            case 'j':
              // Day of the month without leading zeros
              formatted += new Intl.DateTimeFormat(locales, {day: 'numeric'}).format(this.date);
              break;
            case 'l':
              // A full textual representation of the day of the week
              formatted += new Intl.DateTimeFormat(locales, {weekday: 'long'}).format(this.date);
              break;
            case 'N':
              // ISO-8601 numeric representation of the day of the week
              formatted += (this.date.getDay() + 1).toString();
              break;
            case 'S':
              // English ordinal suffix for the day of the month, 2 characters
              formatted += englishOrdinalSuffix(this.date);
              break;
            case 'w':
              // Numeric representation of the day of the week
              formatted += this.date.getDay().toString();
              break;
            case 'z':
              // The day of the year (starting from 0)
              formatted += dayOfYear(this.date).toString();
              break;
            case 'W':
              // ISO-8601 week number of year, weeks starting on Monday
              formatted += getWeekNumber(this.date);
              break;
            case 'F':
              // A full textual representation of a month, such as January or March
              formatted += new Intl.DateTimeFormat(locales, {month: 'long'}).format(this.date);
              break;
            case 'm':
              // Numeric representation of a month, with leading zeros
              formatted += new Intl.DateTimeFormat(locales, {month: '2-digit'}).format(this.date);
              break;
            case 'M':
              // A short textual representation of a month, three letters
              formatted += new Intl.DateTimeFormat(locales, {month: 'short'}).format(this.date);
              break;
            case 'n':
              // Numeric representation of a month, without leading zeros
              formatted += new Intl.DateTimeFormat(locales, {month: 'numeric'}).format(this.date);
              break;
            case 't':
              // Number of days in the given month
              formatted += new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate().toString();
              break;
            case 'L':
              // Whether it's a leap year 1 if it is a leap year, 0 otherwise.
              formatted += (new Date(this.date.getFullYear(), 1, 29).getDate() === 29) ? '1' : '0';
              break;
            case 'o':
              // ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead.
              formatted += new Intl.DateTimeFormat(locales, {year: 'numeric'}).format(this.date);
              break;
            case 'Y':
              // A full numeric representation of a year, 4 digits
              formatted += new Intl.DateTimeFormat(locales, {year: 'numeric'}).format(this.date);
              break;
            case 'y':
              // A two digit representation of a year
              formatted += new Intl.DateTimeFormat(locales, {year: '2-digit'}).format(this.date);
              break;
            case 'a':
              // Lowercase Ante meridiem and Post meridiem	am or pm
              formatted += this.date.getHours() < 12 ? 'am' : 'pm';
              break;
            case 'A':
              // Uppercase Ante meridiem and Post meridiem	AM or PM
              formatted += this.date.getHours() < 12 ? 'AM' : 'PM';
              break;
            case 'B':
              // Swatch Internet time	000 through 999
              formatted += ((this.date.getTime() / 864e2 + 1e3 / 24) % 1e3).toFixed(3).toString();
              break;
            case 'g':
              // 12-hour format of an hour without leading zeros	1 through 12
              formatted += parseInt(String('00' + new Intl.DateTimeFormat(locales, {
                hour12: true,
                hour: 'numeric'
              }).format(this.date).split(' ')[0]).slice(-2), 0).toString();
              break;
            case 'G': {
              // 24-hour format of an hour without leading zeros	0 through 23
              let data: string = new Intl.DateTimeFormat(locales, {hour12: false, hour: 'numeric'}).format(this.date);
              formatted += parseInt(String('00' + data.replace(new RegExp(`^[${zero}]+`), '')).slice(-2), 0).toString();
              break;
            }
            case 'h': {
              // 12-hour format of an hour with leading zeros	01 through 12
              let data: string = new Intl.DateTimeFormat(locales, {
                hour12: true,
                hour: '2-digit'
              }).format(this.date).split(' ')[0];
              formatted += String(`${zero}${zero}${data}`).slice(-2);
              break;
            }
            case 'H':
              // 24-hour format of an hour with leading zeros	00 through 23
              formatted += new Intl.DateTimeFormat(locales, {hour12: false, hour: '2-digit'}).format(this.date);
              break;
            case 'i': {
              // Minutes with leading zeros	00 to 59
              let data: string = new Intl.DateTimeFormat(locales, {minute: '2-digit'}).format(this.date);
              formatted += String(`${zero}${zero}${data}`).slice(-2);
              break;
            }
            case 's': {
              // Seconds, with leading zeros	00 through 59
              let data: string = new Intl.DateTimeFormat(locales, {second: '2-digit'}).format(this.date);
              formatted += String(`${zero}${zero}${data}`).slice(-2);
              break;
            }
            case 'u': {
              // Microseconds	Example: 654321
              formatted += String(`${zero}${zero}${zero}${zero}${zero}${zero}` + Intl.NumberFormat(locales).format(this.date.getMilliseconds())).slice(-6);
              break;
            }
            case 'v':
              // v	Milliseconds. Same note applies as for u.	Example: 654
              formatted += String(`${zero}${zero}${zero}` + Intl.NumberFormat(locales).format(this.date.getMilliseconds())).slice(-3);
              break;
            case 'e':
              // Timezone identifier	Examples: UTC, GMT, Atlantic/Azores
              throw new TypeError(`Not implemented yet. Expected in 0.0.1 milestone`);
            case 'I':
              // Whether or not the date is in daylight saving time	1 if Daylight Saving Time, 0 otherwise.
              throw new TypeError(`Not implemented yet. Expected in 0.0.1 milestone`);
            case 'O':
              // Difference to Greenwich time (GMT) in hours	Example: +0200
              throw new TypeError(`Not implemented yet. Expected in 0.0.1 milestone`);
            case 'P':
              // Difference to Greenwich time (GMT) with colon between hours and minutes	Example: +02:00
              throw new TypeError(`Not implemented yet. Expected in 0.0.1 milestone`);
            case 'T':
              // Timezone abbreviation	Examples: EST, MDT ...
              formatted += new Intl.DateTimeFormat(locales, {timeZoneName: 'short'}).format(this.date).split(' ')[1];
              break;
            case 'Z':
              // Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.	-43200 through 50400
              formatted += (this.date.getTimezoneOffset() * 60).toString();
              break;
            case 'c':
              // ISO 8601 date	2004-02-12T15:19:21+00:00
              formatted += this.date.toISOString();
              break;
            case 'r':
              // RFC 2822 formatted date	Example: Thu, 21 Dec 2000 16:01:07 +0200
              formatted += this.date.toUTCString();
              break;
            case 'U':
              // Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
              formatted += Math.round(this.date.getTime() / 1000).toString();
              break;
          }

          i += 1;
          continue;
        }

        formatted += format[i];
      }

      return formatted;
    }
  };
}

import {Date as NDate} from "../../src/library/ndate";
import {expect} from "chai";
import {Locale} from "../../src/library/locale";

describe("NDate Format functionality", () => {
  let begin: Date;

  beforeEach(() => {
    begin = new Date();
    begin.setUTCFullYear(2000, 0, 1);
    begin.setUTCHours(0, 0, 0, 0);
    Locale.default = [new Locale('en-US')];
  });

  it('should correctly format NDate object by simple strings', async () => {
    let date = new NDate(begin);

    const locales: string[] = Locale.default.map(data => data.toString());
    const zero: string = new Intl.NumberFormat(locales).format(0);
    const hour24 = parseInt(new Intl.DateTimeFormat(locales, {hour12: false, hour: '2-digit'}).format(begin), 0);
    const hour12 = hour24 > 12 ? hour24 - 12 : (hour24 === 0) ? 12 : hour24;
    const hour12WithLeadingZero = String(`${zero}${zero}${hour12}`).slice(-2);
    const hour24WithLeadingZero = String(`${zero}${zero}${hour24}`).slice(-2);
    const hour12WithoutLeadingZero = hour12WithLeadingZero.replace(new RegExp(`^[${zero}]+`), '') || '0';
    const hour24WithoutLeadingZero = hour24WithLeadingZero.replace(new RegExp(`^[${zero}]+`), '') || '0';
    const minutes = parseInt(new Intl.DateTimeFormat(locales, {hour12: false, minute: '2-digit'}).format(begin), 0);
    const minutesWithLeadingZero = String(`${zero}${zero}${minutes}`).slice(-2) || '00';
    const seconds = parseInt(new Intl.DateTimeFormat(locales, {hour12: false, second: '2-digit'}).format(begin), 0);
    const secondsWithLeadingZero = String(`${zero}${zero}${seconds}`).slice(-2) || '00';

    expect(date.format('%d'), 'Day of the month, 2 digits with leading zeros Example: 01 to 31').to.be.equals('01');
    expect(date.format('%D'), 'A textual representation of a day, three letters Example: Mon through Sun').to.be.equals('Sat');
    expect(date.format('%j'), 'Day of the month without leading zeros Example: 1 to 31').to.be.equals('1');
    expect(date.format('%l'), 'A full textual representation of the day of the week Example: Sunday through Saturday').to.be.equals('Saturday');
    expect(date.format('%N'), 'ISO-8601 numeric representation of the day of the week Example: 1 (for Monday) through 7 (for Sunday)').to.be.equals('7');
    expect(date.format('%S'), 'English ordinal suffix for the day of the month, 2 characters Example: st, nd, rd or th. Works well with j').to.be.equals('st');
    expect(date.format('%w'), 'Numeric representation of the day of the week Example: 0 (for Sunday) through 6 (for Saturday)').to.be.equals('6');
    expect(date.format('%z'), 'The day of the year (starting from 0) Example: 0 through 365').to.be.equals('0');
    expect(date.format('%W'), 'ISO-8601 week number of year, weeks starting on Monday Example: 42 (the 42nd week in the year)').to.be.equals('52');
    expect(date.format('%F'), 'A full textual representation of a month, such as January or March Example: January through December').to.be.equals('January');
    expect(date.format('%m'), 'Numeric representation of a month, with leading zeros Example: 01 through 12').to.be.equals('01');
    expect(date.format('%M'), 'A short textual representation of a month, three letters Example: Jan through Dec').to.be.equals('Jan');
    expect(date.format('%n'), 'Numeric representation of a month, without leading zeros Example: 1 through 12').to.be.equals('1');
    expect(date.format('%t'), 'Number of days in the given month Example: 28 through 31').to.be.equals('31');
    expect(date.format('%L'), 'Whether it\'s a leap year Example: 1 if it is a leap year, 0 otherwise.').to.be.equals('1');
    expect(
      date.format('%o'),
      'ISO-8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead. Examples: 1999 or 2003')
      .to.be.equals('2000');
    expect(date.format('%Y'), 'A full numeric representation of a year, 4 digits Examples: 1999or 2003').to.be.equals('2000');
    expect(date.format('%y'), 'A two digit representation of a year Examples: 99 or 03').to.be.equals('00');
    expect(date.format('%a'), 'Lowercase Ante meridiem and Post meridiem Example: am or pm').to.be.equals('am');
    expect(date.format('%A'), 'Uppercase Ante meridiem and Post meridiem Example: AM or PM').to.be.equals('AM');
    expect(date.format('%B'), 'Swatch Internet time Example: 000 through 999').to.be.equals('41.667');

    expect(date.format('%g'), '12-hour format of an hour without leading zeros Example: 1 through 12').to.be.equals(hour12WithoutLeadingZero);
    expect(date.format('%G'), '24-hour format of an hour without leading zeros Example: 0 through 23').to.be.equals(hour24WithoutLeadingZero);
    expect(date.format('%h'), '12-hour format of an hour with leading zeros Example: 01 through 12').to.be.equals(hour12WithLeadingZero);
    expect(date.format('%H'), '24-hour format of an hour with leading zeros Example: 00 through 23').to.be.equals(hour24WithLeadingZero);
    expect(date.format('%i'), 'Minutes with leading zeros Example: 00 to 59').to.be.equals(minutesWithLeadingZero);
    expect(date.format('%s'), 'Seconds, with leading zeros Example: 00 through 59').to.be.equals(secondsWithLeadingZero);

    expect(date.format('%u'), 'Microseconds Example: 654321').to.be.equals('000000');
    expect(date.format('%v'), 'Milliseconds. Same note applies as for u. Example: 654').to.be.equals('000');
    expect(() => {
      date.format('%e');
    }, 'Timezone identifier Examples: UTC, GMT, Atlantic/Azores').to.throw('Not implemented yet. Expected in 0.0.1 milestone');
    expect(() => {
      date.format('%I');
    }, 'Timezone identifier Examples: UTC, GMT, Atlantic/Azores').to.throw('Not implemented yet. Expected in 0.0.1 milestone');
    expect(() => {
      date.format('%O');
    }, 'Difference to Greenwich time (GMT) in hours Example: +0200').to.throw('Not implemented yet. Expected in 0.0.1 milestone');
    expect(() => {
      date.format('%P');
    }, 'Difference to Greenwich time (GMT) with colon between hours and minutes Example: +02:00').to.throw('Not implemented yet. Expected in 0.0.1 milestone');
    expect(date.format('%T'), 'Timezone abbreviation Examples: EST, MDT ...').to.be.equals(
      new Intl.DateTimeFormat(locales, {timeZoneName: 'short'}).format(begin).split(' ')[1]
    );
    expect(
      date.format('%Z'),
      'Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive. Example: -43200 through 50400')
      .to.be.equals((begin.getTimezoneOffset() * 60).toString());
    expect(date.format('%c'), 'ISO 8601 date Example: 2004-02-12T15:19:21+00:00').to.be.equals('2000-01-01T00:00:00.000Z');
    expect(date.format('%r'), 'RFC 2822 formatted date Example: Thu, 21 Dec 2000 16:01:07 +0200').to.be.equals('Sat, 01 Jan 2000 00:00:00 GMT');
    expect(date.format('%U'), 'Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT) Example: 1433422229').to.be.equals('946684800');
  });

  it('should correctly generate NDate object English ordinal suffix', async () => {
    let date = new NDate(begin);

    expect(date.format('%S')).to.be.equals('st');
    date.setUTCFullYear(2000, 0, 2);
    expect(date.format('%S')).to.be.equals('nd');
    date.setUTCFullYear(2000, 0, 3);
    expect(date.format('%S')).to.be.equals('rd');
    date.setUTCFullYear(2000, 0, 4);
    expect(date.format('%S')).to.be.equals('th');
    date.setUTCFullYear(2000, 0, 5);
    expect(date.format('%S')).to.be.equals('th');
    date.setUTCFullYear(2000, 0, 6);
    expect(date.format('%S')).to.be.equals('th');
  });

  it('should correctly generate NDate object with complex string', async () => {
    let date = new NDate(begin);

    expect(date.format('%D test')).to.be.equals('Sat test');
  });

  it('should correctly generate NDate object with complex escaped string', async () => {
    let date = new NDate(begin);

    expect(date.format('\\%D test')).to.be.equals('%D test');
  });

  it('should correctly generate formatted after meridian substring', async () => {
    let date = new NDate(begin);

    // AM
    date.setUTCFullYear(2000, 8, 3);
    date.setHours(1, 0, 0, 0);
    expect(date.format('%A')).to.be.equals('AM');
    expect(date.format('%a')).to.be.equals('am');

    // PM
    date.setUTCFullYear(2000, 8, 3);
    date.setHours(19, 0, 0, 0);
    expect(date.format('%A')).to.be.equals('PM');
    expect(date.format('%a')).to.be.equals('pm');
  });

  it('should correctly generate formatted for a leap year', async () => {
    let date = new NDate(begin);

    // AM
    date.setUTCFullYear(2000, 8, 3);
    date.setHours(1, 0, 0, 0);
    expect(date.format('%L')).to.be.equals('1');

    // PM
    date.setUTCFullYear(2001, 8, 3);
    date.setHours(19, 0, 0, 0);
    expect(date.format('%L')).to.be.equals('0');
  });

  it('should correctly generate formatted for a week number of year', async () => {
    let date = new NDate(begin);

    date.setUTCFullYear(2000, 8, 3);
    expect(date.format('%W')).to.be.equals('35');

    date.setUTCFullYear(2000, 8, 10);
    expect(date.format('%W')).to.be.equals('36');

    date.setUTCFullYear(2000, 8, 11);
    expect(date.format('%W')).to.be.equals('37');
  });
});

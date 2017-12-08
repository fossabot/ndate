import {expect} from "chai";
import {Date as NDate} from "../../src/library/ndate";
import compareDates from "../utilities/compare.utility";

describe("ndate Constructor functionality", () => {
  let example: Date;

  beforeEach(() => {
    example = new Date();
    example.setUTCFullYear(2000, 1, 1);
    example.setUTCHours(0, 0, 0, 0);
  });

  it('should correctly use native setters', async () => {
    let actual = new NDate();
    actual.setUTCFullYear(2000, 1, 1);
    actual.setUTCHours(0, 0, 0, 0);
    compareDates(actual, example);

    actual.setFullYear(2000, 2, 3);
    example.setFullYear(2000, 2, 3);
    compareDates(actual, example);

    actual.setMonth(1, 1);
    example.setMonth(1, 1);
    compareDates(actual, example);

    actual.setDate(1);
    example.setDate(1);
    compareDates(actual, example);

    actual.setHours(1, 2, 3, 4);
    example.setHours(1, 2, 3, 4);
    compareDates(actual, example);

    actual.setMinutes(5, 6, 7);
    example.setMinutes(5, 6, 7);
    compareDates(actual, example);

    actual.setSeconds(8, 9);
    example.setSeconds(8, 9);
    compareDates(actual, example);

    actual.setMilliseconds(10);
    example.setMilliseconds(10);
    compareDates(actual, example);

    actual.setUTCFullYear(2000, 2, 3);
    example.setUTCFullYear(2000, 2, 3);
    compareDates(actual, example);

    actual.setUTCMonth(1, 1);
    example.setUTCMonth(1, 1);
    compareDates(actual, example);

    actual.setUTCDate(1);
    example.setUTCDate(1);
    compareDates(actual, example);

    actual.setUTCHours(1, 2, 3, 4);
    example.setUTCHours(1, 2, 3, 4);
    compareDates(actual, example);

    actual.setUTCMinutes(5, 6, 7);
    example.setUTCMinutes(5, 6, 7);
    compareDates(actual, example);

    actual.setUTCSeconds(8, 9);
    example.setUTCSeconds(8, 9);
    compareDates(actual, example);

    actual.setUTCMilliseconds(10);
    example.setUTCMilliseconds(10);
    compareDates(actual, example);

    actual.setTime(example.getTime());
    actual.setTime(example.getTime());
    compareDates(actual, example);
  });

  it('should correctly create object without parameters', async () => {
    let date = new NDate();
    date.setUTCFullYear(2000, 1, 1);
    date.setUTCHours(0, 0, 0, 0);

    compareDates(date, example);
  });

  it('should correctly create object with NDate parameter', async () => {
    let date = new NDate();
    date.setUTCFullYear(2000, 1, 1);
    date.setUTCHours(0, 0, 0, 0);

    compareDates(new NDate(date), example);
  });

  it('should correctly create object with parameters set', async () => {
    const actual = new NDate(2000, 1, 1, 0, 0, 0, 0);
    const expected = new Date(2000, 1, 1, 0, 0, 0, 0);

    compareDates(actual, expected);
  });

  it('should correctly create object from ISO string', async () => {
    let date = new NDate((new Date(example).toISOString()));
    compareDates(date, example);
  });

  it('should correctly create object from ndate.now() calling', async () => {
    const actual = NDate.now();
    const expected = Date.now();

    expect(actual).to.be.equals(expected);
  });

  it('should correctly create object from ndate.valueOf() calling', async () => {
    const actual = new NDate(example).valueOf();

    expect(actual).to.be.equals(example.valueOf());
  });

  it('should correctly create object from ndate.parse() calling', async () => {
    const actual = NDate.parse(example.toString());
    const expected = Date.parse(example.toString());

    expect(actual).to.be.equals(expected);
  });

  it('should correctly create object from ndate.UTC() calling', async () => {
    const actual = NDate.UTC(2000, 1, 1, 0, 0, 0, 0);
    const expected = Date.UTC(2000, 1, 1, 0, 0, 0, 0);

    expect(actual).to.be.equals(expected);
  });

  it('should trigger TypeError on wrong type conversion called', async () => {
    const actual = new NDate();

    expect(() => {
      actual[Symbol.toPrimitive]('wrong' as any);
    }).to.throw('Called wrong hint type "wrong"');
  });
});
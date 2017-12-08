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
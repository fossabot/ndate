import {expect} from "chai";
import {Date as NDate} from "../../src/library/NDate";
import compareDates from "../utilities/compare.utility";

/*
  expect(ndate.toString()).to.be.equals(date.toString());
  expect(ndate.toDateString()).to.be.equals(date.toDateString());
  expect(ndate.toISOString()).to.be.equals(date.toISOString());
  expect(ndate.toUTCString()).to.be.equals(date.toUTCString());
  expect(ndate.toTimeString()).to.be.equals(date.toTimeString());
  expect(ndate.toLocaleDateString()).to.be.equals(date.toLocaleDateString());
  expect(ndate.toLocaleString()).to.be.equals(date.toLocaleString());
  expect(ndate.toLocaleTimeString()).to.be.equals(date.toLocaleTimeString());
 */

describe("NDate Constructor functionality", () => {
  let example: Date;

  beforeEach(() => {
    example = new Date();
    example.setUTCFullYear(2000, 1, 1);
    example.setUTCHours(0, 0, 0, 0);
  });

  it('should correctly create object from ISO string', async () => {
    let date = new NDate((new Date(example).toISOString()));
    compareDates(date, example);
  });

  it('should correctly create object from NDate.now() calling', async () => {
    const actual = NDate.now();
    const expected = Date.now();

    expect(actual).to.be.equals(expected);
  });

  it('should correctly create object from NDate.parse() calling', async () => {
    const actual = NDate.parse(example.toString());
    const expected = Date.parse(example.toString());

    expect(actual).to.be.equals(expected);
  });

  it('should correctly create object from NDate.UTC() calling', async () => {
    const actual = NDate.UTC(2000, 1, 1, 0, 0, 0, 0);
    const expected = Date.UTC(2000, 1, 1, 0, 0, 0, 0);

    expect(actual).to.be.equals(expected);
  });
});
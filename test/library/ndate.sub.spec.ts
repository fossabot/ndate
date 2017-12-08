import {Relative, Absolute} from "../../src/library/Interval";
import {Date as NDate} from "../../src/library/NDate";
import compareDates from "../utilities/compare.utility";

describe("NDate Subtracting functionality", () => {
  let begin: Date;
  let end: Date;

  beforeEach(() => {
    begin = new Date();
    begin.setUTCFullYear(2000, 1, 1);
    begin.setUTCHours(0, 0, 0, 0);

    end = new Date();
    end.setUTCFullYear(2001, 3, 4);
    end.setUTCHours(4, 5, 6, 7);
  });

  it('should correctly subtract Absolute Interval from existed NDate object', async () => {
    let date = new NDate(new Date(end));
    date.sub(new Absolute(new Date(begin), new Date(end)));

    compareDates(date, begin);
  });

  it('should correctly subtract Relative Interval from existed NDate object', async () => {
    let date = new NDate(new Date(end));
    date.sub(new Relative(new Date(begin), new Date(end)));

    compareDates(date, begin);
  });
});
import {Relative, Absolute} from "../../src/library/interval";
import {Date as NDate} from "../../src/library/ndate";
import compareDates from "../utilities/compare.utility";

describe("ndate Adding functionality", () => {
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

  it('should correctly add Absolute Interval to existed ndate object', async () => {
    let date = new NDate(new Date(begin));
    date.add(new Absolute(new Date(begin), new Date(end)));

    compareDates(date, end);
  });

  it('should correctly add Relative Interval to existed ndate object', async () => {
    let date = new NDate(new Date(begin));
    date.add(new Relative(new Date(begin), new Date(end)));

    compareDates(date, end);
  });
});
import {expect} from "chai";
import {Relative, Absolute} from "../../src/library/Interval";
import {Date as NDate} from "../../src/library/NDate";

describe("NDate class functionality", () => {
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

  describe("Adding functionality", () => {
    it('should correctly add Absolute Interval to existed NDate object', async () => {
      let date = new NDate(new Date(begin));
      date.add(new Absolute(new Date(begin), new Date(end)));

      expect(date.getUTCFullYear()).to.be.equals(end.getUTCFullYear());
      expect(date.getUTCMonth()).to.be.equals(end.getUTCMonth());
      expect(date.getUTCDate()).to.be.equals(end.getUTCDate());
      expect(date.getUTCHours()).to.be.equals(end.getUTCHours());
      expect(date.getUTCMinutes()).to.be.equals(end.getUTCMinutes());
      expect(date.getUTCSeconds()).to.be.equals(end.getUTCSeconds());
      expect(date.getUTCMilliseconds()).to.be.equals(end.getUTCMilliseconds());
      expect(date.getTime()).to.be.equals(end.getTime());
    });

    it('should correctly add Relative Interval to existed NDate object', async () => {
      let date = new NDate(new Date(begin));
      date.add(new Relative(new Date(begin), new Date(end)));

      expect(date.getUTCFullYear()).to.be.equals(end.getUTCFullYear());
      expect(date.getUTCMonth()).to.be.equals(end.getUTCMonth());
      expect(date.getUTCDate()).to.be.equals(end.getUTCDate());
      expect(date.getUTCHours()).to.be.equals(end.getUTCHours());
      expect(date.getUTCMinutes()).to.be.equals(end.getUTCMinutes());
      expect(date.getUTCSeconds()).to.be.equals(end.getUTCSeconds());
      expect(date.getUTCMilliseconds()).to.be.equals(end.getUTCMilliseconds());
      expect(date.getTime()).to.be.equals(end.getTime());
    });
  });

  describe("Subtracting functionality", () => {
    it('should correctly subtract Absolute Interval from existed NDate object', async () => {
      let date = new NDate(new Date(end));
      date.sub(new Absolute(new Date(begin), new Date(end)));

      expect(date.getUTCFullYear()).to.be.equals(begin.getUTCFullYear());
      expect(date.getUTCMonth()).to.be.equals(begin.getUTCMonth());
      expect(date.getUTCDate()).to.be.equals(begin.getUTCDate());
      expect(date.getUTCHours()).to.be.equals(begin.getUTCHours());
      expect(date.getUTCMinutes()).to.be.equals(begin.getUTCMinutes());
      expect(date.getUTCSeconds()).to.be.equals(begin.getUTCSeconds());
      expect(date.getUTCMilliseconds()).to.be.equals(begin.getUTCMilliseconds());
      expect(date.getTime()).to.be.equals(begin.getTime());
    });

    it('should correctly subtract Relative Interval from existed NDate object', async () => {
      let date = new NDate(new Date(end));
      date.sub(new Relative(new Date(begin), new Date(end)));

      expect(date.getUTCFullYear()).to.be.equals(begin.getUTCFullYear());
      expect(date.getUTCMonth()).to.be.equals(begin.getUTCMonth());
      expect(date.getUTCDate()).to.be.equals(begin.getUTCDate());
      expect(date.getUTCHours()).to.be.equals(begin.getUTCHours());
      expect(date.getUTCMinutes()).to.be.equals(begin.getUTCMinutes());
      expect(date.getUTCSeconds()).to.be.equals(begin.getUTCSeconds());
      expect(date.getUTCMilliseconds()).to.be.equals(begin.getUTCMilliseconds());
      expect(date.getTime()).to.be.equals(begin.getTime());
    });
  });
});
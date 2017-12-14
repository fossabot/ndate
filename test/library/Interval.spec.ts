import {expect} from "chai";
import {Relative, Absolute} from "../../src/library/interval";
import {Parameters} from "../../src/interface/Interval";

describe("Intervals Functionality", () => {
  describe("Formatting", () => {
    it('should correctly format simple string', async () => {
      let interval = new Relative(new Date('2000-01-01T00:00:00.000Z'), new Date('2001-03-04T04:05:06.007Z'));
      expect(interval.format('')).to.be.equals('');
      expect(interval.format('%Y')).to.be.equals('1');
      expect(interval.format('%y')).to.be.equals('01');
      expect(interval.format('%M')).to.be.equals('02');
      expect(interval.format('%m')).to.be.equals('2');
      expect(interval.format('%D')).to.be.equals('03');
      expect(interval.format('%d')).to.be.equals('3');
      expect(interval.format('%H')).to.be.equals('04');
      expect(interval.format('%h')).to.be.equals('4');
      expect(interval.format('%I')).to.be.equals('05');
      expect(interval.format('%i')).to.be.equals('5');
      expect(interval.format('%S')).to.be.equals('06');
      expect(interval.format('%s')).to.be.equals('6');
      expect(interval.format('%F')).to.be.equals('007');
      expect(interval.format('%f')).to.be.equals('7');
      expect(interval.format('%R')).to.be.equals('+');
      expect(interval.format('%r')).to.be.equals('');
    });

    it('should correctly format complex string', async () => {
      let interval = new Relative(new Date('2000-01-01T00:00:00.000Z'), new Date('2001-03-04T04:05:06.007Z'));
      expect(interval.format('%Y-%M-%D')).to.be.equals('1-02-03');
      expect(interval.format('%y-%M-%DT%H:%I:%S.%FZ')).to.be.equals('01-02-03T04:05:06.007Z');
      expect(interval.format('%y-%M-%D')).to.be.equals('01-02-03');
      expect(interval.format('%Y-%M-%DT%H:%I:%S.%FZ')).to.be.equals('1-02-03T04:05:06.007Z');
    });

    it('should correctly format complex string with escaping', async () => {
      let interval = new Relative(new Date('2000-01-01T00:00:00.000Z'), new Date('2001-03-04T04:05:06.007Z'));
      expect(interval.format('%Y-\\%M-%D')).to.be.equals('1-%M-03');
      expect(interval.format('%Y-\\%M-%DT%H:%I:\\%S.%FZ')).to.be.equals('1-%M-03T04:05:%S.007Z');
    });

    it('should correctly format simple string big year value', async () => {
      let interval = new Relative(new Date('2000-01-01T00:00:00.000Z'), new Date('2101-03-04T04:05:06.007Z'));
      expect(interval.format('%Y')).to.be.equals('101');
      expect(interval.format('%y')).to.be.equals('01');
    });

    it('should correctly format simple string with oversize length', async () => {
      let interval = new Absolute(new Date('2000-01-01T00:00:00.000Z'), new Date('2001-01-01T00:00:00.000Z'));
      expect(interval.format('%F')).to.be.equals('316');
      expect(interval.format('%f')).to.be.equals('31622400000');
    });

    it('should correctly format simple string reversed dates', async () => {
      let interval = new Absolute(new Date('2001-01-01T00:00:00.000Z'), new Date('2000-01-01T00:00:00.000Z'));
      expect(interval.format('%R')).to.be.equals('-');
      expect(interval.format('%r')).to.be.equals('-');
    });
  });

  describe("Relative", () => {
    it('should correctly create object from parameters set', async () => {
      let interval = new Relative({
        years: 1,
        months: 2,
        days: 3,
        hours: 4,
        minutes: 5,
        seconds: 6,
        milliseconds: 7,
        reverse: false,
      } as Parameters);

      expect(interval.years).to.be.equals(1);
      expect(interval.months).to.be.equals(2);
      expect(interval.days).to.be.equals(3);
      expect(interval.hours).to.be.equals(4);
      expect(interval.minutes).to.be.equals(5);
      expect(interval.seconds).to.be.equals(6);
      expect(interval.milliseconds).to.be.equals(7);
      expect(interval.reverse).to.be.false;
    });

    it('should throw error on creating object from empty parameters set', async () => {
      const fcn = function () {
        new Relative({} as Parameters);
      };

      expect(fcn).to.throw(TypeError, 'Wrong parameters set for Relative interval object');
    });

    it('should correctly calculate interval', async () => {
      let interval = new Relative(new Date('2000-01-01T00:00:00.000Z'), new Date('2001-03-04T04:05:06.007Z'));
      expect(interval.years).to.be.equals(1);
      expect(interval.months).to.be.equals(2);
      expect(interval.days).to.be.equals(3);
      expect(interval.hours).to.be.equals(4);
      expect(interval.minutes).to.be.equals(5);
      expect(interval.seconds).to.be.equals(6);
      expect(interval.milliseconds).to.be.equals(7);
      expect(interval.reverse).to.be.false;
    });

    it('should correctly calculate reversed interval', async () => {
      let interval = new Relative(new Date('2001-03-04T04:05:06.007Z'), new Date('2000-01-01T00:00:00.000Z'));
      expect(interval.years).to.be.equals(1);
      expect(interval.months).to.be.equals(2);
      expect(interval.days).to.be.equals(3);
      expect(interval.hours).to.be.equals(4);
      expect(interval.minutes).to.be.equals(5);
      expect(interval.seconds).to.be.equals(6);
      expect(interval.milliseconds).to.be.equals(7);
      expect(interval.reverse).to.be.true;
    });
  });

  describe("Absolute", () => {
    it('should correctly calculate interval', async () => {
      let interval = new Absolute(new Date('2000-01-01T00:00:00.000Z'), new Date('2001-01-01T00:00:00.000Z'));
      expect(interval.years).to.be.equals(1);
      expect(interval.months).to.be.equals(12);
      expect(interval.days).to.be.equals(366);
      expect(interval.hours).to.be.equals(8784);
      expect(interval.minutes).to.be.equals(527040);
      expect(interval.seconds).to.be.equals(31622400);
      expect(interval.milliseconds).to.be.equals(31622400000);
      expect(interval.reverse).to.be.false;
    });

    it('should correctly calculate reversed interval', async () => {
      let interval = new Absolute(new Date('2001-01-01T00:00:00.000Z'), new Date('2000-01-01T00:00:00.000Z'));
      expect(interval.years).to.be.equals(1);
      expect(interval.months).to.be.equals(12);
      expect(interval.days).to.be.equals(366);
      expect(interval.hours).to.be.equals(8784);
      expect(interval.minutes).to.be.equals(527040);
      expect(interval.seconds).to.be.equals(31622400);
      expect(interval.milliseconds).to.be.equals(31622400000);
      expect(interval.reverse).to.be.true;
    });
  });
});

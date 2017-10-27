import {expect} from "chai";
import {Relative, Absolute} from "../../src/library/Interval";

describe("Interval", () => {
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
  });

  describe("Relative", () => {
    it('should correctly calculate interval', async () => {
      let interval = new Relative(new Date('2000-01-01T00:00:00.000Z'), new Date('2001-03-04T04:05:06.007Z'));
      expect(interval.years).to.be.equals(1);
      expect(interval.months).to.be.equals(2);
      expect(interval.days).to.be.equals(3);
      expect(interval.hours).to.be.equals(4);
      expect(interval.minutes).to.be.equals(5);
      expect(interval.seconds).to.be.equals(6);
      expect(interval.milliseconds).to.be.equals(7);
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
    });
  });
});
import {expect} from "chai";
import {NBasicInterval} from "../../src/library/NInterval";

describe("Interval", () => {
  it('should correctly format simple string', async () => {
    let interval: NBasicInterval = new NBasicInterval(2017, 1, 2, 3, 4, 5, 6, true);
    expect(interval.format('')).to.be.equals('');
    expect(interval.format('%Y')).to.be.equals('2017');
    expect(interval.format('%y')).to.be.equals('17');
    expect(interval.format('%M')).to.be.equals('01');
    expect(interval.format('%m')).to.be.equals('1');
    expect(interval.format('%D')).to.be.equals('02');
    expect(interval.format('%d')).to.be.equals('2');
    expect(interval.format('%H')).to.be.equals('03');
    expect(interval.format('%h')).to.be.equals('3');
    expect(interval.format('%I')).to.be.equals('04');
    expect(interval.format('%i')).to.be.equals('4');
    expect(interval.format('%S')).to.be.equals('05');
    expect(interval.format('%s')).to.be.equals('5');
    expect(interval.format('%F')).to.be.equals('006');
    expect(interval.format('%f')).to.be.equals('6');
    expect(interval.format('%R')).to.be.equals('+');
    expect(interval.format('%r')).to.be.equals('');
  });

  it('should correctly format complex string', async () => {
    let interval: NBasicInterval = new NBasicInterval(2017, 1, 2, 3, 4, 5, 6, true);
    expect(interval.format('%Y-%M-%D')).to.be.equals('2017-01-02');
    expect(interval.format('%Y-%M-%DT%H:%I:%S.%FZ')).to.be.equals('2017-01-02T03:04:05.006Z');

    interval = new NBasicInterval(20117, 1, 2, 3, 4, 5, 5995, true);
    expect(interval.format('%y-%M-%D')).to.be.equals('17-01-02');
    expect(interval.format('%Y-%M-%DT%H:%I:%S.%FZ')).to.be.equals('20117-01-02T03:04:05.600Z');
  });

  it('should correctly format complex string with escaping', async () => {
    let interval: NBasicInterval = new NBasicInterval(2017, 1, 2, 3, 4, 5, 6, true);
    expect(interval.format('%Y-\\%M-%D')).to.be.equals('2017-%M-02');
    expect(interval.format('%Y-\\%M-%DT%H:%I:\\%S.%FZ')).to.be.equals('2017-%M-02T03:04:%S.006Z');
  });

  it('should correctly use default values', async () => {
    let interval: NBasicInterval = new NBasicInterval();
    expect(interval.format('%Y')).to.be.equals('0');
    expect(interval.format('%y')).to.be.equals('00');
    expect(interval.format('%M')).to.be.equals('00');
    expect(interval.format('%m')).to.be.equals('0');
    expect(interval.format('%D')).to.be.equals('00');
    expect(interval.format('%d')).to.be.equals('0');
    expect(interval.format('%H')).to.be.equals('00');
    expect(interval.format('%h')).to.be.equals('0');
    expect(interval.format('%I')).to.be.equals('00');
    expect(interval.format('%i')).to.be.equals('0');
    expect(interval.format('%S')).to.be.equals('00');
    expect(interval.format('%s')).to.be.equals('0');
    expect(interval.format('%F')).to.be.equals('000');
    expect(interval.format('%f')).to.be.equals('0');
    expect(interval.format('%R')).to.be.equals('-');
    expect(interval.format('%r')).to.be.equals('-');
  });
});
import {Relative, Absolute} from "../../src/library/interval";
import {Date as NDate} from "../../src/library/ndate";
import compareDates from "../utilities/compare.utility";
import {expect} from "chai";
import {Locale} from "../../src/library/locale";

describe("ndate Locale functionality", () => {
  let begin: Date;

  beforeEach(() => {
    begin = new Date();
    begin.setUTCFullYear(2000, 0, 1);
    begin.setUTCHours(0, 0, 0, 0);
  });

  it('should correctly format NDate object by simple strings', async () => {
    let date = new NDate(begin);
    const locales: Array<Locale> = [new Locale('en-US')];

    date.setLocale(locales);

    expect(date.format('%F')).to.be.equals('January');
    expect(date.getLocale()).to.be.deep.equals(locales);
  });

  it('should correctly format NDate object with locale modifiers', async () => {
    let date = new NDate(begin);
    const locales: Array<Locale> = [new Locale('en-US', {
      nu: "arab",
      ca: "gregory",
      co: "phonebk",
      hc: "h12",
      kf: "lower",
      kn: true,
    })];

    date.setLocale(locales);

    expect(date.format('%F')).to.be.equals('January');
  });

  it('should correctly format NDate object without locale defining', async () => {
    let date = new NDate(begin);
    Locale.default = [new Locale('en-US')];

    expect(date.format('%F')).to.be.equals('January');
  });
});
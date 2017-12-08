import {Date as NDate} from "../../src/library/ndate";
import {expect} from "chai";

/**
 * That function compare all returned values with native Date object
 * @param {NDate} ndate
 * @param {Date} date
 */
export default function (ndate: NDate, date: Date) {
  // To string conversion
  expect(ndate.toString()).to.be.equals(date.toString());
  expect(ndate.toDateString()).to.be.equals(date.toDateString());
  expect(ndate.toISOString()).to.be.equals(date.toISOString());
  expect(ndate.toUTCString()).to.be.equals(date.toUTCString());
  expect(ndate.toTimeString()).to.be.equals(date.toTimeString());
  expect(ndate.toLocaleDateString()).to.be.equals(date.toLocaleDateString());
  expect(ndate.toLocaleString()).to.be.equals(date.toLocaleString());
  expect(ndate.toLocaleTimeString()).to.be.equals(date.toLocaleTimeString());

  // Timezone depended values
  expect(ndate.getFullYear()).to.be.equals(date.getFullYear());
  expect(ndate.getMonth()).to.be.equals(date.getMonth());
  expect(ndate.getDate()).to.be.equals(date.getDate());
  expect(ndate.getHours()).to.be.equals(date.getHours());
  expect(ndate.getMinutes()).to.be.equals(date.getMinutes());
  expect(ndate.getSeconds()).to.be.equals(date.getSeconds());
  expect(ndate.getMilliseconds()).to.be.equals(date.getMilliseconds());

  // UTC values
  expect(ndate.getUTCFullYear()).to.be.equals(date.getUTCFullYear());
  expect(ndate.getUTCMonth()).to.be.equals(date.getUTCMonth());
  expect(ndate.getUTCDate()).to.be.equals(date.getUTCDate());
  expect(ndate.getUTCHours()).to.be.equals(date.getUTCHours());
  expect(ndate.getUTCMinutes()).to.be.equals(date.getUTCMinutes());
  expect(ndate.getUTCSeconds()).to.be.equals(date.getUTCSeconds());
  expect(ndate.getUTCMilliseconds()).to.be.equals(date.getUTCMilliseconds());

  // Time values
  expect(ndate.getTime()).to.be.equals(date.getTime());
}
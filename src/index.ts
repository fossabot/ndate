import {Date as NDateClass} from "./library/ndate";
import {Absolute as IntervalAbsolute, Relative as IntervalRelative} from "./library/interval";
import {Locale as LocaleClass} from "./library/locale";

import {NDateConstructor, NDateInterface} from "./interface/ndate";
import {Interval as IntervalInterface, Parameters as IntervalParameters} from "./interface/Interval";
import {Locale as ILocale, Options as ILocaleOptions, Modifiers  as ILocaleModifiers, Code as TypeLocaleCodes} from "./interface/locale";

namespace Interface {
  export interface NDate extends NDateInterface {}
  export namespace NDate {
    export interface Constructor extends NDateConstructor {}
  }

  export interface Interval extends IntervalInterface {}
  export namespace Interval {
    export interface Absolute extends IntervalAbsolute {}
    export interface Relative extends IntervalRelative {}
    export interface Parameters extends IntervalParameters {}
  }

  export interface Locale extends ILocale {}
  export namespace Locale {
    export interface Options extends ILocaleOptions {}
    export interface Modifiers extends ILocaleModifiers {}
  }
}

namespace Interval {
  export class Absolute extends IntervalAbsolute {}
  export interface Relative extends IntervalRelative {}
  export type Codes = TypeLocaleCodes;
}

export {
  Interface,
  Interval,
  NDateClass as NDate,
  LocaleClass as Locale,
}

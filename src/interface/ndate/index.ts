import {BasicDate} from "../../library/basic-date";
import {NDateConstructor} from "./ndate.constructor";
import {NDateAdd} from "./ndate.add";
import {NDateSub} from "./ndate.sub";
import {NDateFormat} from "./ndate.format";
import {NDateLocale} from "./ndate.locale";

interface NDateInterface extends BasicDate, NDateAdd, NDateSub, NDateFormat, NDateLocale {
}

export {
  NDateConstructor,
  NDateInterface,
}

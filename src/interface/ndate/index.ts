import {BasicDate} from "../../library/basic-date";
import {NDateConstructor} from "./ndate.constructor";
import {NDateAdd} from "./ndate.add";
import {NDateSub} from "./ndate.sub";

interface NDateInterface extends BasicDate, NDateAdd, NDateSub {
}

export {
  NDateConstructor,
  NDateInterface,
}
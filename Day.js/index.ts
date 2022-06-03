import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
const a = dayjs().locale("ja");
const b = dayjs().locale("ja");

class DayWrapper {
  private readonly _dayjs!: Dayjs;

  constructor(day: string, locale: string = "ja") {
    this._dayjs = dayjs(day).locale(locale);
  }

  locale(): string {
    return this._dayjs.locale();
  }
}

const t = new DayWrapper("2021-01-01", "en");
const t2 = new DayWrapper("2021-01-02");

console.log(t.locale());
console.log(t2.locale());

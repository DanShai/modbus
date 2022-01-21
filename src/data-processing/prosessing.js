/**
 * the magic happens here !
 * processing the raw streamed data and decoding
 * it to human readable format, and could be displayed
 * in graphs or charts
 */

import { manual } from "../data-manual/manual";
import {
  decode_bcd,
  decode_bit,
  decode_integer,
  decode_long,
  decode_real,
  format_date
} from "./decoder";

export class Processing {
  get_entry = ix => manual.filter(el => el.get_reg_num() === ix);

  process_data = data => {
    let final_data = [];
    if (data) {
      let bcd_calculated_date = [];
      const darr = data.split("\n");
      const [date, ...mydata] = darr;
      const cur_date = date;

      const pdata = mydata.reduce((acc, cur) => {
        const [ix, value] = cur.split(":").map(el => parseInt(el.trim(), 10));
        const an_entry = this.get_entry(ix);
        if (an_entry.length > 0) {
          const cur_entry = an_entry[0];
          if (cur_entry.get_reg_name() === "Date") {
            bcd_calculated_date.push(value);
            return acc;
          }
          if (acc.length > 0) {
            const last = acc[acc.length - 1];
            if (last.name === cur_entry.get_reg_name()) {
              last.regValue.push(value);
              return acc;
            }
          }
          acc.push({
            name: cur_entry.get_reg_name(),
            regValue: [value],
            regType: cur_entry.get_reg_type()
          });
        }
        return acc;
      }, []);

      const decoded_data = this.decode_data(pdata);
      const bcd_date = format_date(bcd_calculated_date);

      final_data = [cur_date, bcd_date, ...decoded_data];
    }
    return final_data;
  };

  decode_data = data =>
    data.map(({ name, regValue, regType }) => {
      if (regType === "REAL4") {
        return { name, regValue: decode_real(regValue) };
      } else if (regType === "INTEGER") {
        return { name, regValue: decode_integer(regValue) };
      } else if (regType === "BIT") {
        return { name, regValue: decode_bit(regValue) };
      } else if (regType === "BCD") {
        return {
          name: name,
          regValue: parceInt(decode_bcd(regValue), 10)
        };
      } else if (regType === "LONG") {
        return { name, regValue: decode_long(regValue) };
      } else {
        return { name: "N/A", regValue: 0 };
      }
    });
}

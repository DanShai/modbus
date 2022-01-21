/**
 * bunch of decoding functions for diverse
 * data types
 *
 */

export const decode_integer = v_arr => {
  const integ = Number(v_arr[0]).toString(16);
  const val = parseInt(integ.slice(-2), 16);
  return val;
};
export const decode_bit = v_arr => {
  const bit = Number(v_arr[0]).toString(2);
  const val = parseInt(bit, 2);
  return val;
};

export const decode_bcd = v_arr => {
  return v_arr.reduce((a, c) => {
    let d = Number(c).toString(16);
    while (d.length < 4) d = "0" + d;
    return d + a;
  }, "");
};
export const decode_real = v_arr => {
  let f_arr = v_arr.map(el => Number(el).toString(16)).reverse();
  let fn = "0x" + f_arr.join("");
  const sgn = fn & 0x80000000 ? -1 : 1;
  const exp = ((fn >> 23) & 0xff) - 127;
  const mtsa = 1 + (fn & 0x7fffff) / 0x7fffff;
  return sgn * mtsa * Math.pow(2, exp);
};

export const decode_long = v_arr => {
  let f_arr = v_arr.map(el => Number(el).toString(16)).reverse();
  let fn = f_arr.map(el => el.slice(-2)).join("");
  if (fn.length % 2 != 0) {
    fn = "0" + fn;
  }
  let nb = parseInt(fn, 16);
  const fmax = Math.pow(2, (fn.length / 2) * 8);
  if (nb > fmax / 2 - 1) {
    nb -= fmax;
  }
  return nb;
};

export const rep_char = (st, ix, ch) =>
  st.substr(0, ix) + ch + st.substr(ix + 1);

export const format_date = bcddate => {
  let bcd_date = decode_bcd(bcddate);
  bcd_date = "20" + bcd_date.match(/(..?)/g).join("-");
  bcd_date = rep_char(bcd_date, 10, " ");
  bcd_date = rep_char(bcd_date, 13, ":");
  bcd_date = rep_char(bcd_date, 16, ":");
  return bcd_date;
};

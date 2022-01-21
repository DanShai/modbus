/**
 * will hold registers data as described in the manual
 * docs.
 */
export class Entry {
  constructor(reg_num, reg_group, reg_size, reg_name, reg_type, reg_note) {
    this.reg_num = reg_num;
    this.reg_group = reg_group;
    this.reg_size = reg_size;
    this.reg_name = reg_name;
    this.reg_type = reg_type;
    this.reg_note = reg_note;
  }
  get_reg_num = () => this.reg_num;
  get_reg_group = () => this.reg_group;
  get_reg_size = () => this.reg_size;
  get_reg_name = () => this.reg_name;
  get_reg_type = () => this.reg_type;
  get_reg_note = () => this.reg_note;
}

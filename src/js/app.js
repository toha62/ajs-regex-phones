export default class Phone {
  constructor(phone) {
    this.phone = phone;
  }

  getFormatedPhone() {
    const reResult = /[+]?\s*(\d+)\s*[-]?[(]?(\d{3})[)]?\s*[-]?(\d+)\s*[-]?(\d+)\s*[-]?(\d+)/.exec(this.phone);
    const formattedPhone = ['+'];

    if (this.phone.trim().startsWith('+')) {
      formattedPhone.push(reResult[1]);
    } else {
      formattedPhone.push('7');
    }

    for (let i = 2; i < reResult.length; i += 1) {
      formattedPhone.push(reResult[i]);
    }

    return formattedPhone.join('');
  }
}

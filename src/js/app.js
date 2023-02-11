export default class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  getFormatedPhone() {
    const reResult = /[+]?\s*(\d+)[-\s]*[(]?\s*(\d{3})\s*[)]?[-\s]*(\d+)[-\s]*(\d+)[-\s]*(\d+)/.exec(this.phoneNumber);
    const formattedPhone = ['+'];

    if (this.phoneNumber.trim().startsWith('+')) {
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

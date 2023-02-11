import Phone from '../app';

test.each([
  ['8 (927) 123-34-67', '+79271233467'],
  ['8(927)123-34-67', '+79271233467'],
  ['8-( 927 ) 123-34-67', '+79271233467'],
  ['8-927-123-34-67', '+79271233467'],
  [' + 7 960 000  00 09  ', '+79600000009'],
  ['+7-960 000- 00 09  ', '+79600000009'],
  ['+86 000 000 -0009', '+860000000009'],
])('for phone number %s should return formatted phone %s"', (phoneNumber, result) => {
  const phone = new Phone(phoneNumber);

  expect(phone.getFormatedPhone()).toBe(result);
});

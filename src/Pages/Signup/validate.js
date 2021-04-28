const PHONE_NUMBER_REGEX = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

export default function validate({ phone }) {
  const errors = {};

  if (!phone) {
    errors.phone = '핸드폰 번호가 입력되지 않았습니다.';
  } else if (!PHONE_NUMBER_REGEX.test(phone)) {
    errors.phone = '입력된 핸드폰 번호가 유효하지 않습니다.';
  }

  return errors;
}

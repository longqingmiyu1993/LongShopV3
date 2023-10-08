/**
 * authur:fylong
 * Date:20211203
 * notes:一些字段的校验，可以用这个去处理
 */

/**
 * 手机验证
 * @returns
 */
export function phoneVerify(value) {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return reg.test(value);
}

/**
 * 身份证验证
 * @returns
 */
export function idCardVerify(value) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
}

/**
 * 姓名验证（加少数民族）
 * @returns
 */
export function nameVerify(value) {
  const reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
  return reg.test(value);
}

/**
 * 电子邮件
 * @returns
 */
export function emailVerify(value) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(value);
}

/**
 * 密码校验1
 * 1.密码必须由字母、数字、特殊符号组成，区分大小写
 * 2.特殊符号包含（. _ ~ ! @ # $ ^ & *）
 * 3.密码长度为8-20位
 * @returns
 */
export function passwordVerifyOne(value) {
  const reg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,16}$/;
  return reg.test(value);
}

/**
 * 密码校验2
 * 1.密码必须由字母、数字组成，区分大小写
 * 2.密码长度为8-16位
 */
export function passwordVerifyTwo(value) {
  const reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/;
  return reg.test(value);
}

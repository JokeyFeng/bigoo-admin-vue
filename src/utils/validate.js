/**
 * 校验输入用户名合法性
 * @param str
 * @return {boolean}
 */
export function isLegalUsername(str) {
  //const valid_map = ['admin', 'test'];
  //return valid_map.indexOf(str.trim()) >= 0
  return str.trim().length > 1;
}

/**
 * 校验密码合法性
 * @param str
 * @returns {boolean}
 */
export function isLegalPassword(str) {
  return str.trim().length >= 3;
}

/**
 * 校验url合法性
 * @param textVal
 */
export function isLegalUrl(textVal) {
  const urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlRegex.test(textVal)
}

module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  str = str.split('');

  const template = bracketsConfig
    .toString()
    .split(',')
    .join('');
  let count = 0;

  for (let i = 0; i < template.length; i += 2) {
    for (let j = 0; j < str.length; j += 1) {
      if (str[j] === template[i]) {
        count += 1;
        for (let k = j + 1; k < str.length; k += 1) {
          if ((k - j - 1) % 2 === 0 && template[i + 1] === str[k]) {
            count -= 1;
            str[k] = '';
            break;
          }
        }
      }

      if (count < 0) {
        return false;
      }
    }

    if (count !== 0) {
      return false;
    }
  }

  return true;
};

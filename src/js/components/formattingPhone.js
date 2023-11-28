// функция, которая принимает строку и форматирует её в соответствии с заданным шаблоном "+9 999 999 99 99"

export function formattingPhone(tel) {
  let currentTel = tel.replace(/\D/g, '');
  let formattedValue = '+';

  if (currentTel.length === 0) {
    return '';
  }

  if (currentTel.length > 0) {
    formattedValue += currentTel[0];
  }
  if (currentTel.length > 1) {
    formattedValue += ' ';
    formattedValue += currentTel.substr(1, 3);
  }
  if (currentTel.length > 4) {
    formattedValue += ' ';
    formattedValue += currentTel.substr(4, 3);
  }
  if (currentTel.length > 7) {
    formattedValue += ' ';
    formattedValue += currentTel.substr(7, 2);
  }
  if (currentTel.length > 9) {
    formattedValue += ' ';
    formattedValue += currentTel.substr(9, 2);
  }
  if (currentTel.length > 11) {
    formattedValue += ' ';
    formattedValue += currentTel.substr(11, 19);
  }

  return formattedValue;
}

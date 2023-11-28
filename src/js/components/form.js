// функция, которая при фокусе на input поднимает или опускает текст

export function onFocus(input) {
  if (input.value.length !== 0) return;

  const label = input.nextElementSibling;
  label.classList.add('active');
}

export function onBlur(input) {
  if (input.value.length === 0) {
    const label = input.nextElementSibling;
    label.classList.remove('active');
  }
}

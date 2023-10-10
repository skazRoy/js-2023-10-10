// Задание №1 
export function kolobok(name) { 
	let action;
	switch (name) {
		case 'дедушка':
      action = 'Я от дедушки ушёл';
      break;
    case 'заяц':
      action = 'Я от зайца ушёл';
      break;
    case 'лиса':
      action = 'Меня съели';
      break;
    default:
      action = 'Я ни с кем не встречался';
	}
	console.log(action);
}

// Задание №2

export function newYear(characterName) {
	let result;
  switch (characterName) {
    case 'Дед Мороз':
      result = `${characterName}! ${characterName}! ${characterName}!`;
      break;
    case 'Снегурочка':
      result = `${characterName}! ${characterName}! ${characterName}!`;
      break;
    default:
      result = 'Неизвестный персонаж';
  }

	console.log(result);
}
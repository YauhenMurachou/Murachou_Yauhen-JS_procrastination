let phrases = [
  { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'посмотреть новый выпуск Юрия Дудя', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '26px';
  } else {
    advice.style.fontSize = '36px';
  }
});


for (let i = 0; i < 3; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.addEventListener('click', function () {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
}
)

themeButton.addEventListener('click', function () {
  if (themeButton.innerHTML === '<i class="fas fa-sun"></i>') {
    themeButton.innerHTML = '<i class="fas fa-moon"></i>'
  } else if (themeButton.innerHTML === '<i class="fas fa-moon"></i>') {
    themeButton.innerHTML = '<i class="fas fa-sun"></i>'
  }
}
)


let tooltipElem;

document.onmouseover = function (event) {
  let target = event.target.closest('[data-tooltip]');

  // если у нас есть подсказка...tooltipHtml это содержимое подсказки
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};


let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

form.onsubmit = function (evt) {
  evt.preventDefault();
  // Измените значение textContent на следующей строке
  message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};

let moreInfo = document.querySelector('.more-info-button');

function questionary() {
  let surName = prompt('Введите свою фамилию');
  while (!surName || (+surName) == 0) {
    surName = prompt('Введите корректные данные! Назад дороги нет!')
  };

  let firstName = prompt('Введите своё имя');
  while (!firstName || (+firstName) == 0) {
    firstName = prompt('Введите корректные данные! Назад дороги нет!')
  };

  let secondName = prompt('Введите своё отчество');
  while (!secondName || (+secondName) == 0) {
    secondName = prompt('Введите корректные данные! Назад дороги нет!')
  };

  let age = prompt('Сколько Вам полных лет?');
  while (!age || (+age) == 0 || +age % 1 !== 0 || +age <= 0 || +age > 140) {
    age = prompt('Введите корректные данные! Назад дороги нет, и букв в возрасте не бывает!')
  };

  let ageInDays = (age * 365);

  let ageFromFive = (+age + 5);

  let gender = confirm('Ваш пол мужской?');
  if (gender) {
    gender = 'мужской';
  } else {
    gender = 'женский';
  }

  let pension;
  if ((age >= 63 && gender == 'мужской') || (age >= 58 && gender == 'женский')) {
    pension = 'да';
  } else if ((age < 63 && gender == 'мужской') || (age < 58 && gender == 'женский')) {
    pension = 'нет';
  }

  let procrastination;
  if (age < 18) {
    procrastination = '3 часа 40 минут в день';
  } else if (age >= 18 && age < 30) {
    procrastination = '2 часа 10 минут в день';
  } else if (age >= 30 && age < 45) {
    procrastination = '1 часа 20 минут в день';
  } else if (age >= 45 && age < 60) {
    procrastination = 'довольно редко, в среднем 20 минут в неделю';
  } else if (age >= 60) {
    procrastination = 'в таком возрасте уже не до прокрастинации';
  }


  alert(`ваше ФИО: ${surName} ${firstName} ${secondName} \n
  ваш возраст в годах: ${age} \n
  ваш возраст в днях: ${ageInDays} \n
  через 5 лет вам будет: ${ageFromFive} \n
  ваш пол: ${gender} \n
  вы на пенсии: ${pension} \n
  вы прокрастинируете: ${procrastination}  `)
}

moreInfo.addEventListener('click', questionary);


window.onload = function () {
  let c = { 'USD': '2.53', 'EUR': '3.09', 'BYN': '1' }; // Устанавливаем курс валют

  let val = document.getElementById('val');
  let currency1 = document.getElementById('cur1');
  let currency2 = document.getElementById('cur2');
  let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
  function summ() {
    let z = 0;
    if (currency1.value === currency2.value) {
      result.innerText = val.value;
    } else {
      if (currency1.value != 'BYN') {
        z = val.value * c[currency1.value];
        result.innerHTML = Math.ceil((z / c[currency2.value]) * 100) / 100;
      } else { // Если не равны
        result.innerHTML = Math.ceil((val.value * c[currency2.value]) * 100) / 100;
      }
    }
  }
  val.oninput = function () {
    summ();
  };
  currency1.onchange = function () { 
    summ();
  };
  currency2.onchange = function () { 
    summ();
  }
}


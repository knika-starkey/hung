window.onload = function () {
  let arrWords = [
    "світанок",
    "прокрастинація",
    "темрява",
    "пестливий",
    "промінь",
    "мрія",
    "мистецтво",
    "провесна",
    "вогняний",
    "фортеця",
    "привид",
  ];
  let word = arrWords[Math.floor(Math.random() * arrWords.length)];
  let countElement = document.getElementById("count");
  let count = 0;
  let remain;
  let answer = []; // що відкрито
  let wrong = [];
  function init() {
    answer[0] = word[0]; // перша літера буде відкрита
    answer[word.length - 1] = word[word.length - 1]; // остання літера буде відкрита
    remain = word.length - 2;

    for (let i = 1; i < word.length - 1; i++) {
      answer[i] = "_"; // між першою та останньою літерою - знаки підкреслення
    }

    // console.log(answer);
    // console.log(answer.join(" "));
    let answ = document.getElementById("answ");
    answ.innerHTML = answer.join(" ");
  }
  function check() {
    if (remain == 0) {
      alert("Вітаю! Ви відгадали слово!!!");
      return;
    } else if (count > word.length) {
      alert("Ви витратили усі спроби :(");
      return;
    }
    let guess = prompt("Input a letter");

    for (let i = 0; i < word.length; i++) {
      // проходимо рядок word поелементно, як масив
      if (word[i] === guess) {
        // якщо літера рядка збіглася з вгаданою
        answer[i] = guess; // записуємо її до масиву відкритих букв
        remain--;
      }
    }
    if (word.indexOf(guess) == -1 && wrong.indexOf(wrong)) {
      wrong.push(guess);
    }
    count++;
    countElement.innerHTML = `Було ${count} спроб<br>НЕправильні літери ${wrong.join(
      ", "
    )}`;
    answ.innerHTML = answer.join(" ");
  }

  const guessButton = document.getElementById("guess");
  guessButton.addEventListener("click", check);
  init();
};

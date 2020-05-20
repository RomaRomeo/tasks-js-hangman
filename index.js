const words = [
    "програма",
    "риба",
    "мавпа",
    "шлюбка",
    "будинок",
    "дерево"
];

let word = words[Math.floor(Math.random()*words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let attempt = 5;

while (remainingLetters > 0 && attempt > 0) {
    alert(answerArray.join(" "));
    let guess = prompt('Вгадайте букву або нажміть Відміна для виходу з гри.');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Буть ласка введіть тільки одну букву.');
    } else {
        attempt--;
        guess = guess.toLowerCase();
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === '_') {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(' '));
    if (attempt > 0) {
      alert("Супер! Було загадане слово " + word.toUpperCase());
    } else {
      alert("Ви програли! Було загадане слово " + word.toUpperCase());
    }
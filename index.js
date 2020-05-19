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

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    const guess = prompt('Вгадайте букву або нажміть Відміна для виходу з гри.');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Буть ласка введіть тільки одну букву.');
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(' '));
alert('Супер! Було загадане слово ' + word);
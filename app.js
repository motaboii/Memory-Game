// document.addEventListener('DOMContentLoaded', () => {
//   const cardArray = [
//     {
//       name: 'fries',
//       img: ' sova.png',
//     },
//     {
//       name: 'cheeseburger',
//       img: ' phoenix.png',
//     },
//     {
//       name: 'ice-cream',
//       img: ' omen.png',
//     },
//     {
//       name: 'pizza',
//       img: ' raze.png',
//     },
//     {
//       name: 'milkshake',
//       img: ' viper.png',
//     },
//     {
//       name: 'hotdog',
//       img: ' sage.png',
//     },
//     {
//       name: 'fries',
//       img: ' sova.png',
//     },
//     {
//       name: 'cheeseburger',
//       img: ' phoenix.png',
//     },
//     {
//       name: 'ice-cream',
//       img: ' omen.png',
//     },
//     {
//       name: 'pizza',
//       img: ' raze.png',
//     },
//     {
//       name: 'milkshake',
//       img: ' viper.png',
//     },
//     {
//       name: 'hotdog',
//       img: ' sage.png',
//     },
//   ];

//   cardArray.sort(() => 0.5 - Math.random());

//   const grid = document.querySelector('.grid');
//   const resultDisplay = document.querySelector('#result');
//   let cardsChosen = [];
//   let cardsChosenId = [];
//   let cardsWon = [];
//   var stoptime = false;
//   var sec = 0;
//   var min = 0;
//   var flag = 0;

//   function createBoard() {
//     for (let i = 0; i < cardArray.length; i++) {
//       const card = document.createElement('img');
//       card.setAttribute('src', ' blank.jpeg');
//       card.setAttribute('data-id', i);
//       card.addEventListener('click', flipCard);
//       grid.appendChild(card);
//     }
//   }

//   function checkForMatch() {
//     const cards = document.querySelectorAll('img');
//     const optionOneId = cardsChosenId[0];
//     const optionTwoId = cardsChosenId[1];
//     const scoreCard = document.querySelector('.score_1');

//     if (optionOneId == optionTwoId) {
//       cards[optionOneId].setAttribute('src', ' blank.jpeg');
//       cards[optionTwoId].setAttribute('src', ' blank.jpeg');
//       alert('You have clicked the same image!');
//     } else if (cardsChosen[0] === cardsChosen[1]) {
//       alert('You found a match');

//       // cards[optionOneId].setAttribute('src', ' white.png');
//       // cards[optionTwoId].setAttribute('src', ' white.png');
//       cards[optionOneId].removeEventListener('click', flipCard);
//       cards[optionTwoId].removeEventListener('click', flipCard);
//       cardsWon.push(cardsChosen);
//     } else {
//       cards[optionOneId].setAttribute('src', ' blank.jpeg');
//       cards[optionTwoId].setAttribute('src', ' blank.jpeg');
//       alert('Sorry, try again');
//     }
//     cardsChosen = [];
//     cardsChosenId = [];
//     resultDisplay.textContent = cardsWon.length;
//     if (cardsWon.length === cardArray.length / 2) {
//       resultDisplay.textContent = 'Congratulations! You found them all!';
//       stoptime = true;
//       alert(
//         'Number of moves: ' +
//           move +
//           '\n' +
//           'Time taken: ' +
//           min +
//           ' min ' +
//           sec +
//           ' secs'
//       );
//     }
//   }

//   var move = 0;
//   function moveCounter() {
//     move++;
//     counter.innerHTML = move;
//   }

//   function flipCard() {
//     if (flag == 0) {
//       setTimeout(function () {
//         timer();
//       }, 1000);
//       flag++;
//     }
//     let cardId = this.getAttribute('data-id');
//     cardsChosen.push(cardArray[cardId].name);
//     cardsChosenId.push(cardId);
//     this.setAttribute('src', cardArray[cardId].img);
//     if (cardsChosen.length === 2) {
//       setTimeout(checkForMatch, 500);
//     }
//     moveCounter();
//   }

//   function timer() {
//     if (stoptime == false) {
//       sec = Number(sec);
//       min = Number(min);
//       sec = sec + 1;
//       if (sec == 60) {
//         min = min + 1;
//         sec = '00';
//       }
//       if (sec >= 1 && sec <= 9) {
//         sec = '0' + sec;
//       }
//       if (min == 0) {
//         min = '00';
//       } else if (min >= 1 && min <= 9) {
//         min = '0' + min;
//       }
//       document.getElementById('time').innerHTML = min + ' : ' + sec;
//       setTimeout(function () {
//         timer();
//       }, 1000);
//     }
//   }

//   document.getElementById('playagain').addEventListener('click', restart);

//   function restart() {
//     document.location.href = '';
//   }

//   createBoard();
// });



document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    { name: 'fries', img: 'sova.png' },
    { name: 'cheeseburger', img: 'phoenix.png' },
    { name: 'ice-cream', img: 'omen.png' },
    { name: 'pizza', img: 'raze.png' },
    { name: 'milkshake', img: 'viper.png' },
    { name: 'hotdog', img: 'sage.png' },
    { name: 'fries', img: 'sova.png' },
    { name: 'cheeseburger', img: 'phoenix.png' },
    { name: 'ice-cream', img: 'omen.png' },
    { name: 'pizza', img: 'raze.png' },
    { name: 'milkshake', img: 'viper.png' },
    { name: 'hotdog', img: 'sage.png' },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const messageContainer = document.getElementById('message-container');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let stoptime = false;
  let sec = 0;
  let min = 0;
  let flag = 0;
  let move = 0;

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'blank.jpeg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function displayMessage(message, color = '#D97706') {
    messageContainer.textContent = message;
    messageContainer.style.color = color;
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'blank.jpeg');
      cards[optionTwoId].setAttribute('src', 'blank.jpeg');
      displayMessage('You have clicked the same image!', '#D3D3D3');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      displayMessage('You found a match!', 'D3D3D3');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'blank.jpeg');
      cards[optionTwoId].setAttribute('src', 'blank.jpeg');
      displayMessage('Sorry, try again.', '#D3D3D3');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      stoptime = true;
      displayMessage(
        `Congratulations! You Found them all.`,
        '#D3D3D3'
      );
    }
    
  }

  function moveCounter() {
    move++;
    document.getElementById('move-counter').textContent = move;
  }

  function flipCard() {
    if (flag === 0) {
      setTimeout(timer, 1000);
      flag++;
    }
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
    moveCounter();
  }

  function timer() {
    if (!stoptime) {
      sec++;
      if (sec === 60) {
        min++;
        sec = 0;
      }
      document.getElementById('time').textContent = `${min
        .toString()
        .padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
      setTimeout(timer, 1000);
    }
  }

  document.getElementById('playagain').addEventListener('click', () => {
    location.reload();
  });

  createBoard();
});

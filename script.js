'use strict';

// generate and randomize numbers from 1 - 8 in pairs
const genRandomNumbers = () => {
  const array = [];
  for (let index = 1; index <= 8; index++) {
    for (let i = 0; i < 2; i++)
      array.push({ id: Math.random(), number: index });
  }

  return array;
};

const sortedNumbers = genRandomNumbers().sort(sortNumbers);
console.log(sortedNumbers);

function sortNumbers(a, b) {
  return a.id - b.id;
}

// render the numbers in button elements
setTimeout(Game, 3000);
const prelude = document.createElement('div');
prelude.innerText = 'Memory Game Loading...';
document.body.append(prelude);

function Game() {
  let value = '';
  let active = '';
  let score = 0;
  let count = 0;
  prelude.style.display = 'none';
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const showWin = document.createElement('p');
  showWin.setAttribute('class', 'showWin');
  showWin.innerText = 'Congratulations! You won';
  showWin.style.display = 'none';
  const showLose = document.createElement('p');
  showLose.setAttribute('class', 'showLose');
  showLose.innerText = 'Oops! You Lose';
  showLose.style.display = 'none';
  const button = document.createElement('button');
  const header = document.createElement('header');
  button.innerText = 'Refresh';
  button.addEventListener('click', () => {
    location.reload();
  });
  const logo = document.createElement('div');
  logo.innerText = `Count - ${count}`;

  const control = document.createElement('div');
  control.append(button);
  header.append(logo, control);

  document.body.append(header, container, showWin, showLose);
  container.addEventListener('dblclick', (event) => {
    // event.preventDefault();
    event.target.innerText.style.backgroundColor = 'red';
  });

  container.addEventListener('click', (event) => {
    event.preventDefault();
    if (count < 20) {
      if (event.target.innerText.length === 1) {
        if (value === '') {
          value = event.target.innerText;
          active = event.target;
          active.style.backgroundColor = 'brown';
          active.disabled = true;
        } else if (value === event.target.innerText) {
          event.target.style.backgroundColor = '#032181';
          active.style.backgroundColor = '#032181';
          event.target.disabled = true;
          value = '';
          score++;
          logo.innerText = `Count - ${++count}`;
        } else {
          active.style.backgroundColor = 'white';
          active.disabled = false;
          value = '';
          logo.innerText = `Count - ${++count}`;
        }
        if (score === sortedNumbers.length / 2) {
          showWin.style.display = 'block';
        }
      }
    } else {
      showLose.style.display = 'block';
    }
  });

  sortedNumbers.map(createButton);

  function createButton(elm) {
    const button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.innerText = elm.number;
    container.append(button);
  }
}

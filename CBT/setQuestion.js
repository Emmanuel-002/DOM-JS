const header = document.createElement('header');
const logo = document.createElement('div');
const navbar = document.createElement('div');
header.append(logo, navbar);
document.body.append(header);

logo.innerText = 'CBT';
const addQuestionBtn = document.createElement('button');
addQuestionBtn.innerText = 'Add';
const viewQuestionBtn = document.createElement('button');
viewQuestionBtn.innerText = 'View';
const testBtn = document.createElement('button');
testBtn.innerText = 'Test';

navbar.append(addQuestionBtn, viewQuestionBtn, testBtn);

let inputList = {};
let value = '';
numberOfInput = 0;

function setQuestion() {
  if (localStorage.length === 0)
    localStorage.setItem('questions', JSON.stringify([]));

  /**Create form*/
  const questionFromContainer = document.createElement('section');
  questionFromContainer.setAttribute('class', 'form-container');

  const formTitle = document.createElement('div');
  formTitle.innerText = 'Fill the fields below to add question';

  const questionForm = document.createElement('div');
  questionForm.setAttribute('id', 'question-form');
  questionForm.addEventListener('change', (event) => {
    event.preventDefault();
    value = event.target.value;
  });

  const questionBlock = document.createElement('div');
  questionForm.setAttribute('id', 'question-block');
  const questionInput = document.createElement('input');
  questionInput.setAttribute('placeholder', 'Question');

  const optionBlock = document.createElement('div');
  optionBlock.setAttribute('class', 'option-block');

  const controlBlock = document.createElement('div');

  const addBtnBlock = document.createElement('div');
  const addBtn = document.createElement('button');

  const submitBtnBlock = document.createElement('div');
  const submitBtn = document.createElement('button');
  submitBtn.innerText = 'Submit';
  submitBtn.disabled = true;

  addBtn.setAttribute('class', 'add-btn');
  addBtn.innerText = 'Add';
  addBtn.addEventListener('click', addInput);
  submitBtn.addEventListener('click', submit);

  questionBlock.append(questionInput);
  addBtnBlock.append(addBtn);
  submitBtnBlock.append(submitBtn);
  controlBlock.append(addBtnBlock, submitBtnBlock);
  questionForm.prepend(questionBlock, optionBlock, controlBlock);
  questionFromContainer.append(formTitle, questionForm);
  document.body.append(questionFromContainer);

  function addInput() {
    if (numberOfInput <= 5) {
      if (numberOfInput < 1) inputList = { ...inputList, question: value };
      else if (numberOfInput < 5)
        inputList[String.fromCharCode(64 + numberOfInput)] = value;
      else inputList['answer'] = value;
      value = '';
      console.log(numberOfInput++);
      if (numberOfInput <= 5) {
        const optBlock = document.createElement('div');
        optBlock.setAttribute('class', 'opt-block');

        const optInput = document.createElement('input');
        optInput.setAttribute('placeholder', 'Option');

        optBlock.append(optInput);
        optionBlock.append(optBlock);
      } else {
        addBtn.disabled = true;
        submitBtn.disabled = false;
      }
    }
    return inputList;
  }

  function submit() {
    let input = addInput();
    let localStorageData = localStorage['questions'];
    let questions = JSON.parse(localStorageData);
    questions = [...questions, input];
    questions = JSON.stringify(questions);
    localStorage.setItem('questions', questions);
    location.reload();
  }
  return questionFromContainer;
}

function viewQuestion() {
  const mainContainer = document.createElement('section');
  mainContainer.setAttribute('id', 'main-container');
  document.body.append(mainContainer);

  let localStorageData = JSON.parse(localStorage['questions']);
  localStorageData.map((data) => {
    const container = document.createElement('div');
    const questionBlock = document.createElement('div');
    const optBlock = document.createElement('div');
    container.append(questionBlock, optBlock);
    mainContainer.append(container);
    let index = 0;
    for (d in data) {
      if (d === 'question') questionBlock.innerText = data[d];
      else if (d === 'answer') {
        const opt = document.createElement('div');
        opt.innerText = `Answer: ${data[d]}`;
        optBlock.append(opt);
      } else {
        const opt = document.createElement('div');
        opt.innerText = `${String.fromCharCode(index++ + 65)}. ${data[d]}`;
        optBlock.append(opt);
      }
    }
  });
  return mainContainer;
}

function test() {
  let score = 0;
  let Data = JSON.parse(localStorage['questions']);
  function sortData() {
    for (data of Data) {
      data['id'] = Math.random() * 1000;
    }
    let result = Data.sort((a, b) => a.id - b.id);
    return result;
  }
  let sortedData = sortData();
  console.log(sortedData);
  let questionNumber = 0;

  const questionBox = document.createElement('article');
  document.body.append(questionBox);

  const questionBoxTitle = document.createElement('div');
  questionBoxTitle.setAttribute('class', 'title');

  const questionDiv = document.createElement('div');
  questionDiv.setAttribute('class', 'question-div');

  const optDiv = document.createElement('div');
  optDiv.setAttribute('class', 'opt-div');

  const control = document.createElement('div');
  const nextBtn = document.createElement('button');
  const viewReportBtn = document.createElement('button');
  nextBtn.innerText = 'Next'; //to be conditioned later
  viewReportBtn.innerText = 'View report'; //to be conditioned later
  nextBtn.addEventListener('click', displayQuestion);
  viewReportBtn.addEventListener('click', viewReport);
  control.append(nextBtn, viewReportBtn);

  viewReportBtn.style.display = 'none';

  questionBox.append(questionBoxTitle, questionDiv, optDiv, control);

  function displayQuestion() {
    optDiv.innerHTML = '';
    const optionA = document.createElement('div');
    const optionB = document.createElement('div');
    const optionC = document.createElement('div');
    const optionD = document.createElement('div');

    const optA = document.createElement('label');
    optA.setAttribute('for', 'optA');
    const radioA = document.createElement('input');
    radioA.setAttribute('type', 'radio');
    radioA.setAttribute('name', 'option');
    radioA.setAttribute('id', 'optA');

    const optB = document.createElement('label');
    optB.setAttribute('for', 'optB');
    const radioB = document.createElement('input');
    radioB.setAttribute('type', 'radio');
    radioB.setAttribute('name', 'option');
    radioB.setAttribute('id', 'optB');

    const optC = document.createElement('label');
    optC.setAttribute('for', 'optC');
    const radioC = document.createElement('input');
    radioC.setAttribute('type', 'radio');
    radioC.setAttribute('name', 'option');
    radioC.setAttribute('id', 'optC');

    const optD = document.createElement('label');
    optD.setAttribute('for', 'optD');
    const radioD = document.createElement('input');
    radioD.setAttribute('type', 'radio');
    radioD.setAttribute('name', 'option');
    radioD.setAttribute('id', 'optD');

    if (questionNumber < sortedData.length) {
      // let isCorrect = false;
      questionBoxTitle.innerText = `Question ${questionNumber + 1} of ${
        sortedData.length
      }`;

      questionDiv.innerText = sortedData[questionNumber]['question'];
      optA.innerText = sortedData[questionNumber]['A'];
      optB.innerText = sortedData[questionNumber]['B'];
      optC.innerText = sortedData[questionNumber]['C'];
      optD.innerText = sortedData[questionNumber]['D'];

      optionA.append(radioA, optA);
      optionB.append(radioB, optB);
      optionC.append(radioC, optC);
      optionD.append(radioD, optD);

      optDiv.append(optionA, optionB, optionC, optionD);
      score++;
      questionNumber++;
    } else {
      questionBoxTitle.innerText = 'End of Exercise';
      questionDiv.style.display = 'none';
      nextBtn.style.display = 'none';
      viewReportBtn.style.display = 'block';
    }
  }
  function viewReport() {
    questionBoxTitle.innerText = `Your score is ${score}`;
  }
  displayQuestion();
  return questionBox;
}

let questionForm = setQuestion();
let questionBlock = viewQuestion();
let testBlock = test();

questionForm.style.display = 'none';
questionBlock.style.display = 'none';
testBlock.style.display = 'none';

addQuestionBtn.addEventListener('click', () => {
  questionForm.style.display = 'block';
  questionBlock.style.display = 'none';
  testBlock.style.display = 'none';
});
viewQuestionBtn.addEventListener('click', () => {
  questionForm.style.display = 'none';
  questionBlock.style.display = 'block';
  testBlock.style.display = 'none';
});
testBtn.addEventListener('click', () => {
  questionForm.style.display = 'none';
  questionBlock.style.display = 'none';
  testBlock.style.display = 'block';
});

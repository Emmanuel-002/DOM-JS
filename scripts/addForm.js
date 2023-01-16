// create test add form
function AddForm() {
  const addForm = document.createElement('form');
  addForm.action = '#';
  question = document.createElement('input');
  question.placeholder = 'Question';
  const optA = document.createElement('input');
  optA.placeholder = 'Option A';
  const optB = document.createElement('input');
  optB.placeholder = 'Option B';
  const optC = document.createElement('input');
  optC.placeholder = 'Option C';
  const optD = document.createElement('input');
  optD.placeholder = 'Option D';
  const optE = document.createElement('input');
  optE.placeholder = 'Option E';

  if (options === 2) {
    addForm.append(question, optA, optB);
  } else if (options === 4) {
    addForm.append(question, optA, optB, optC, optD);
  } else if (options === 5) {
    addForm.append(question, optA, optB, optC, optD, optE);
  }

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerText = 'Add';
  addForm.append(submitBtn);

  let isQuestionValid;
  let isOptAValid;
  let isOptBValid;
  let isOptCValid;
  let isOptDValid;
  let isOptEValid;
  let is2Valid;
  let is4Valid;
  let is5Valid;

  function initializeInputs() {
    isQuestionValid = '';
    isOptAValid = '';
    isOptBValid = '';
    isOptCValid = '';
    isOptDValid = '';
    isOptEValid = '';
    is2Valid = false;
    is4Valid = false;
    is5Valid = false;
    submitBtn.disabled = true;
  }
  initializeInputs();

  question.addEventListener('keyup', (event) => {
    event.preventDefault();
    isQuestionValid = event.target.value.trim();
    validate(isQuestionValid, question);
  });
  optA.addEventListener('keyup', (event) => {
    event.preventDefault();
    isOptAValid = event.target.value.trim();
    validate(isOptAValid, optA);
  });
  optB.addEventListener('keyup', (event) => {
    event.preventDefault();
    isOptBValid = event.target.value.trim();
    validate(isOptBValid, optB);
  });
  optC.addEventListener('keyup', (event) => {
    event.preventDefault();
    isOptCValid = event.target.value.trim();
    validate(isOptCValid, optC);
  });
  optD.addEventListener('keyup', (event) => {
    event.preventDefault();
    isOptDValid = event.target.value.trim();
    validate(isOptDValid, optD);
  });
  optE.addEventListener('keyup', (event) => {
    event.preventDefault();
    isOptEValid = event.target.value.trim();
    validate(isOptEValid, optE);
  });

  function validate(isValid, opt) {
    if (isValid) {
      opt.setAttribute('class', 'valid');
    } else {
      opt.setAttribute('class', 'inValid');
    }
    if (options === 2) {
      if (isQuestionValid && isOptAValid && isOptBValid) {
        is2Valid = true;
        submitBtn.disabled = false;
        submitBtn.setAttribute('class', 'enabled');
      } else {
        is2Valid = false;
        submitBtn.disabled = true;
        submitBtn.removeAttribute('class', 'enabled');
      }
    } else if (options === 4) {
      if (
        isQuestionValid &&
        isOptAValid &&
        isOptBValid &&
        isOptCValid &&
        isOptDValid
      ) {
        is4Valid = true;
        submitBtn.disabled = false;
        submitBtn.setAttribute('class', 'enabled');
      } else {
        is4Valid = false;
        submitBtn.disabled = true;
        submitBtn.removeAttribute('class', 'enabled');
      }
    } else if (options === 5) {
      if (
        isQuestionValid &&
        isOptAValid &&
        isOptBValid &&
        isOptCValid &&
        isOptDValid &&
        isOptEValid
      ) {
        is5Valid = true;
        submitBtn.disabled = false;
        submitBtn.setAttribute('class', 'enabled');
      } else {
        is5Valid = false;
        submitBtn.disabled = true;
        submitBtn.removeAttribute('class', 'enabled');
      }
    }
  }

  // initializeInputs();

  let schema = {};
  let isLocalStorage = localStorage.getItem('quest');
  if (!isLocalStorage) {
    localStorage.setItem('quest', JSON.stringify([]));
  }

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let jsonData = localStorage.getItem('quest');
    let data = JSON.parse(jsonData);
    let isPresent = data.some((elm) => elm['question'] === isQuestionValid);
    if (!isPresent) {
      if (is2Valid) {
        // addForm.append(question, optA, optB, submitBtn);
        schema = {
          id: new Date().getTime(),
          question: isQuestionValid,
          optionA: isOptAValid,
          optionB: isOptBValid,
        };
        data.push(schema);
        localStorage.setItem('quest', JSON.stringify(data));
      } else if (is4Valid) {
        schema = {
          id: new Date().getTime(),
          question: isQuestionValid,
          optionA: isOptAValid,
          optionB: isOptBValid,
          optionC: isOptCValid,
          optionD: isOptDValid,
        };
        data.push(schema);
        localStorage.setItem('quest', JSON.stringify(data));
        console.log(data);
      } else if (is5Valid) {
        schema = {
          id: new Date().getTime(),
          question: isQuestionValid,
          optionA: isOptAValid,
          optionB: isOptBValid,
          optionC: isOptCValid,
          optionD: isOptDValid,
          optionE: isOptEValid,
        };
        data.push(schema);
        localStorage.setItem('quest', JSON.stringify(data));
        console.log(data);
      }
      loggerInfo.setAttribute('class', 'success');
      loggerInfo.innerText = 'Question has been added';
      document.body.append(logger);
      setTimeout(() => {
        addForm.remove();
        OptQuery();
      }, 1000);
    } else {
      loggerInfo.setAttribute('class', 'failed');
      loggerInfo.innerText = 'Question already exists';
      document.body.append(logger);
      setTimeout(() => {
        // addForm.remove();
        logger.remove();
        addForm.style.display = 'none';
        optQueryForm.style.display = 'flex';
      }, 1000);
    }
    initializeInputs();
    question.value = '';
    optA.value = '';
    optB.value = '';
    optC.value = '';
    optD.value = '';
    optE.value = '';
    submitBtn.removeAttribute('class', 'enabled');
  });
  addForm.style.display = 'flex';
  document.body.append(addForm);
}

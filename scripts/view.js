const view = document.createElement('article');
view.setAttribute('class', 'view_block');

function View() {
  document.body.innerHTML = '';
  view.remove();
  Header();
  const localStorageData = localStorage.getItem('quest');
  const questionArray = JSON.parse(localStorageData);
  questionArray.map((elm, index) => {
    questionContainer = document.createElement('form');
    questionContainer.action = '#';
    questionContainer.setAttribute('class', `_${elm['id']}`);
    let questionHeader = document.createElement('h2');
    let question = document.createElement('input');
    question.setAttribute('class', 'question');
    questionContainer.append(questionHeader, question);
    question.value = elm['question'];
    question.readOnly = true;
    let options = Object.keys(elm).length - 2;

    if (options === 2) {
      let optionA = document.createElement('input');
      optionA.setAttribute('class', 'optionA');
      optionA.value = `${elm.optionA}`;
      optionA.readOnly = true;
      let optionB = document.createElement('input');
      optionB.setAttribute('class', 'optionB');
      optionB.value = `${elm.optionB}`;
      optionB.readOnly = true;
      questionContainer.append(optionA, optionB);
    } else if (options === 4) {
      let optionA = document.createElement('input');
      optionA.setAttribute('class', 'optionA');
      optionA.value = `${elm.optionA}`;
      optionA.readOnly = true;
      let optionB = document.createElement('input');
      optionB.setAttribute('class', 'optionB');
      optionB.value = `${elm.optionB}`;
      optionB.readOnly = true;
      let optionC = document.createElement('input');
      optionC.setAttribute('class', 'optionC');
      optionC.value = `${elm.optionC}`;
      optionC.readOnly = true;
      let optionD = document.createElement('input');
      optionD.setAttribute('class', 'optionD');
      optionD.value = `${elm.optionD}`;
      optionD.readOnly = true;
      questionContainer.append(optionA, optionB, optionC, optionD);
    } else if (options === 5) {
      let optionA = document.createElement('input');
      optionA.setAttribute('class', 'optionA');
      optionA.value = `${elm.optionA}`;
      optionA.readOnly = true;
      let optionB = document.createElement('input');
      optionB.setAttribute('class', 'optionB');
      optionB.value = `${elm.optionB}`;
      optionB.readOnly = true;
      let optionC = document.createElement('input');
      optionC.setAttribute('class', 'optionC');
      optionC.value = `${elm.optionC}`;
      optionC.readOnly = true;
      let optionD = document.createElement('input');
      optionD.setAttribute('class', 'optionD');
      optionD.value = `${elm.optionD}`;
      optionD.readOnly = true;
      let optionE = document.createElement('input');
      optionE.setAttribute('class', 'optionE');
      optionE.value = `${elm.optionE}`;
      optionE.readOnly = true;
      questionContainer.append(optionA, optionB, optionC, optionD, optionE);
    }
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    let saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';
    saveBtn.disabled = true;
    deleteBtn.setAttribute('id', `delete${elm['id']}`);
    editBtn.setAttribute('id', `edit${elm['id']}`);
    saveBtn.setAttribute('id', `save${elm['id']}`);

    deleteBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const localStorageData = localStorage.getItem('quest');
      const questionArray = JSON.parse(localStorageData);
      let remainder = questionArray.filter(
        (question) => `delete${question['id']}` !== `${event.target.id}`
      );
      let jsonData = JSON.stringify(remainder);
      localStorage.setItem('quest', jsonData);
      let deletedBlock = document.querySelector(`._${elm['id']}`);
      deletedBlock.remove();
      loggerInfo.setAttribute('class', 'success');
      loggerInfo.innerText = 'Question has been deleted';
      document.body.append(logger);
      setTimeout(() => {
        logger.remove();
      }, 1000);
    });

    editBtn.addEventListener('click', (event) => {
      event.preventDefault();
      let inputArray = document.querySelectorAll(`._${elm['id']} input`);
      for (let elm of inputArray) {
        elm.readOnly = false;
      }
      saveBtn.disabled = false;
    });
    saveBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const localStorageData = localStorage.getItem('quest');
      const questionArray = JSON.parse(localStorageData);
      let editedQuestion = questionArray.find(
        (question) => `save${question['id']}` == `${event.target.id}`
      );
      const options = Object.keys(editedQuestion).length - 2;
      let newQuestionArray = questionArray.map((question, index) => {
        if (question['id'] === editedQuestion['id']) {
          let id = question['id'];
          let newQuestion = document.querySelector(
            `._${question['id']} input.question`
          ).value;
          if (options === 2) {
            let newOptionA = document.querySelector(
              `._${question['id']} input.optionA`
            ).value;
            let newOptionB = document.querySelector(
              `._${question['id']} input.optionB`
            ).value;
            let inputArray = document.querySelectorAll(`._${elm['id']} input`);
            for (let elm of inputArray) {
              elm.readOnly = true;
            }
            return {
              id: id,
              question: newQuestion,
              optionA: newOptionA,
              optionB: newOptionB,
            };
          } else if (options === 4) {
            let newOptionA = document.querySelector(
              `._${question['id']} input.optionA`
            ).value;
            let newOptionB = document.querySelector(
              `._${question['id']} input.optionB`
            ).value;
            let newOptionC = document.querySelector(
              `._${question['id']} input.optionC`
            ).value;
            let newOptionD = document.querySelector(
              `._${question['id']} input.optionD`
            ).value;
            let inputArray = document.querySelectorAll(`._${elm['id']} input`);
            for (let elm of inputArray) {
              elm.readOnly = true;
            }
            return {
              id: id,
              question: newQuestion,
              optionA: newOptionA,
              optionB: newOptionB,
              optionC: newOptionC,
              optionD: newOptionD,
            };
          } else if (options === 5) {
            let newOptionA = document.querySelector(
              `._${question['id']} input.optionA`
            ).value;
            let newOptionB = document.querySelector(
              `._${question['id']} input.optionB`
            ).value;
            let newOptionC = document.querySelector(
              `._${question['id']} input.optionC`
            ).value;
            let newOptionD = document.querySelector(
              `._${question['id']} input.optionD`
            ).value;
            let newOptionE = document.querySelector(
              `._${question['id']} input.optionE`
            ).value;
            let inputArray = document.querySelectorAll(`._${elm['id']} input`);
            for (let elm of inputArray) {
              elm.readOnly = true;
            }
            return {
              id: id,
              question: newQuestion,
              optionA: newOptionA,
              optionB: newOptionB,
              optionC: newOptionC,
              optionD: newOptionD,
              optionE: newOptionE,
            };
          }
        } else {
          return question;
        }
      });
      console.log(newQuestionArray);
      let newJsonData = JSON.stringify(newQuestionArray);
      localStorage.setItem('quest', newJsonData);
      console.log(newJsonData);
      saveBtn.disabled = true;
      loggerInfo.setAttribute('class', 'success');
      loggerInfo.innerText = `Question ${index + 1} has been edited`;
      document.body.append(logger);
      setTimeout(() => {
        logger.remove();
      }, 1000);
    });

    const controlBlock = document.createElement('div');
    controlBlock.append(editBtn, saveBtn, deleteBtn);
    questionContainer.append(controlBlock);
    view.append(questionContainer);
    questionHeader.innerText = `Question ${index + 1}`;
  });
  document.body.append(view);
}

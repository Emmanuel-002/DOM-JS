function Signup() {
  document.body.innerHTML = '';
  Header();
  document.querySelector('.signin_form')
    ? document.querySelector('.signin_form').remove()
    : '';
  document.querySelector('.signup_form')
    ? document.querySelector('.signup_form').remove()
    : '';
  const signupForm = document.createElement('form');
  signupForm.action = '#';
  signupForm.setAttribute('class', 'signup_form');
  const signupTitle = document.createElement('h2');
  signupTitle.innerText = 'Registration Portal';
  const firstName = document.createElement('input');
  firstName.placeholder = 'first name';
  const middleName = document.createElement('input');
  middleName.placeholder = 'middle name';
  const lastName = document.createElement('input');
  lastName.placeholder = 'last name';
  const email = document.createElement('input');
  email.placeholder = 'email';
  const password = document.createElement('input');
  password.placeholder = 'password';
  const confirmPassword = document.createElement('input');
  confirmPassword.placeholder = 'confirm password';
  password.type = 'password';
  confirmPassword.type = 'password';
  const signupBtn = document.createElement('button');
  signupBtn.innerText = 'Sign up';
  signupBtn.disabled = true;
  signupForm.append(
    signupTitle,
    firstName,
    middleName,
    lastName,
    email,
    password,
    confirmPassword,
    signupBtn
  );
  document.body.append(signupForm);

  let canSignup = false;
  let isFirstNameValid = false;
  let isMiddleNameValid = false;
  let isLastNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;
  let isConfirmPasswordValid = false;

  firstName.addEventListener('keyup', (event) => {
    event.preventDefault();
    isFirstNameValid = event.target.value.length >= 2;
    console.log(isFirstNameValid);
    isFirstNameValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignup =
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isFirstNameValid &&
      isMiddleNameValid &&
      isLastNameValid;
    if (canSignup) {
      signupBtn.disabled = false;
      signupBtn.setAttribute('class', 'enabled');
    } else {
      signupBtn.disabled = true;
      signupBtn.removeAttribute('class', 'enabled');
    }
  });
  middleName.addEventListener('keyup', (event) => {
    event.preventDefault();
    isMiddleNameValid = event.target.value.length >= 2;
    isMiddleNameValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignup =
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isFirstNameValid &&
      isMiddleNameValid &&
      isLastNameValid;
    if (canSignup) {
      signupBtn.disabled = false;
      signupBtn.setAttribute('class', 'enabled');
    } else {
      signupBtn.disabled = true;
      signupBtn.removeAttribute('class', 'enabled');
    }
  });
  lastName.addEventListener('keyup', (event) => {
    event.preventDefault();
    isLastNameValid = event.target.value.length >= 2;
    isLastNameValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignup =
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isFirstNameValid &&
      isMiddleNameValid &&
      isLastNameValid;
    if (canSignup) {
      signupBtn.disabled = false;
      signupBtn.setAttribute('class', 'enabled');
    } else {
      signupBtn.disabled = true;
      signupBtn.removeAttribute('class', 'enabled');
    }
  });
  email.addEventListener('keyup', (event) => {
    event.preventDefault();
    isEmailValid = event.target.value.includes('@gmail.com');
    isEmailValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignup =
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isFirstNameValid &&
      isMiddleNameValid &&
      isLastNameValid;
    if (canSignup) {
      signupBtn.disabled = false;
      signupBtn.setAttribute('class', 'enabled');
    } else {
      signupBtn.disabled = true;
      signupBtn.removeAttribute('class', 'enabled');
    }
  });
  password.addEventListener('keyup', (event) => {
    event.preventDefault();
    isPasswordValid = event.target.value.trim().length >= 8;
    isPasswordValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignup =
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isFirstNameValid &&
      isMiddleNameValid &&
      isLastNameValid;
    if (canSignup) {
      signupBtn.disabled = false;
      signupBtn.setAttribute('class', 'enabled');
    } else {
      signupBtn.disabled = true;
      signupBtn.removeAttribute('class', 'enabled');
    }
  });
  confirmPassword.addEventListener('keyup', (event) => {
    event.preventDefault();
    isConfirmPasswordValid = event.target.value === password.value;
    isConfirmPasswordValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignup =
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isFirstNameValid &&
      isMiddleNameValid &&
      isLastNameValid;
    signupBtn.disabled = canSignup;
    if (canSignup) {
      signupBtn.disabled = false;
      signupBtn.setAttribute('class', 'enabled');
    } else {
      signupBtn.disabled = true;
      signupBtn.removeAttribute('class', 'enabled');
    }
  });
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let username = email.value;
    let user = localStorage.getItem(username);
    if (!user) {
      localStorage.setItem(username, JSON.stringify([]));
      let data = JSON.parse(localStorage.getItem(username));
      let userSchema = {
        id: new Date().getTime(),
        firstName: firstName.value,
        middleName: middleName.value,
        lastName: lastName.value,
        password: password.value,
      };
      data.push(userSchema);
      localStorage.setItem(username, JSON.stringify(data));
      document.body.append(logger);
      loggerInfo.innerText = 'Your registration was successful';
      loggerInfo.setAttribute('class', 'success');
      setTimeout(() => {
        logger.remove();
      }, 1000);
    } else {
      document.body.append(logger);
      loggerInfo.innerText = 'Email has already been used';
      loggerInfo.setAttribute('class', 'failed');
      setTimeout(() => {
        logger.remove();
      }, 1000);
    }
  });
}

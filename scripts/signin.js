function Signin() {
  document.body.innerHTML = '';
  Header();
  const signinForm = document.createElement('form');
  signinForm.action = '#';
  signinForm.setAttribute('class', 'signin_form');
  const signinTitle = document.createElement('h2');
  signinTitle.innerText = 'Login Portal';
  const email = document.createElement('input');
  email.placeholder = 'email';
  const password = document.createElement('input');
  password.placeholder = 'password';
  password.type = 'password';
  const signinBtn = document.createElement('button');
  signinBtn.innerText = 'Sign in';
  signinBtn.disabled = true;
  signinForm.append(signinTitle, email, password, signinBtn);
  document.body.append(signinForm);

  let canSignin = false;
  isEmailValid = false;
  isPasswordValid = false;

  email.addEventListener('keyup', (event) => {
    event.preventDefault();
    isEmailValid = event.target.value.includes('@gmail.com');
    isEmailValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignin = isEmailValid && isPasswordValid;
    if (canSignin) {
      signinBtn.disabled = false;
      signinBtn.setAttribute('class', 'enabled');
    } else {
      signinBtn.disabled = true;
      signinBtn.removeAttribute('class', 'enabled');
    }
  });
  password.addEventListener('keyup', (event) => {
    event.preventDefault();
    isPasswordValid = event.target.value.trim().length >= 8;
    isPasswordValid
      ? event.target.setAttribute('class', 'valid')
      : event.target.setAttribute('class', 'inValid');
    canSignin = isEmailValid && isPasswordValid;
    if (canSignin) {
      signinBtn.disabled = false;
      signinBtn.setAttribute('class', 'enabled');
    } else {
      signinBtn.disabled = true;
      signinBtn.removeAttribute('class', 'enabled');
    }
  });
  signinBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let username = email.value;
    let passcode = password.value;
    let user = localStorage.getItem(username);
    user = JSON.parse(user);
    if (user && passcode === user[0].password) {
      document.body.append(logger);
      loggerInfo.innerText = 'Login was successful';
      loggerInfo.setAttribute('class', 'success');
      setTimeout(() => {
        logger.remove();
        candidate = username;
      }, 1000);
    } else {
      document.body.append(logger);
      loggerInfo.innerText = 'Login failed';
      loggerInfo.setAttribute('class', 'failed');
      setTimeout(() => {
        logger.remove();
      }, 1000);
    }
  });
}

// create header section
// create header elements
function Header() {
  const header = document.createElement('header');
  const logo = document.createElement('div');
  logo.setAttribute('class', 'logo');
  const nav = document.createElement('div');
  const navBtnBlock = document.createElement('ul');
  const signup = document.createElement('li');
  const signin = document.createElement('li');
  const addBtn = document.createElement('li');
  const viewBtn = document.createElement('li');
  const testBtn = document.createElement('li');

  signup.addEventListener('click', Signup);
  signin.addEventListener('click', Signin);
  testBtn.addEventListener('click', Test);

  addBtn.addEventListener('click', OptQuery);
  viewBtn.addEventListener('click', () => {
    View();
  });

  // add content to header elements
  signup.innerText = 'Register';
  signin.innerText = 'Login';
  addBtn.innerText = 'Add';
  viewBtn.innerText = 'View';
  testBtn.innerText = 'Test';
  logo.innerText = 'CBT';
  navBtnBlock.append(signup, signin, addBtn, viewBtn, testBtn);
  nav.append(navBtnBlock);
  header.append(logo, nav);

  document.body.append(header);
}
Header();

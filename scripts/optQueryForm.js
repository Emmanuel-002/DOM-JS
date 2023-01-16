function OptQuery() {
  document.body.innerHTML = '';
  Header();
  const optQueryForm = document.createElement('div');
  optQueryForm.setAttribute('class', 'option_query_form');
  const optQueryInfo = document.createElement('p');
  const _2Opt = document.createElement('button');
  const _4Opt = document.createElement('button');
  const _5Opt = document.createElement('button');

  optQueryInfo.innerText =
    'Select the number of options you want for the question you are about to set';
  _2Opt.innerText = 'Two Options';
  _4Opt.innerText = 'Four Options';
  _5Opt.innerText = 'Five Options';

  _2Opt.addEventListener('click', (event) => {
    event.preventDefault();
    options = 2;
    optQueryForm.style.display = 'none';
    AddForm();
  });

  _4Opt.addEventListener('click', (event) => {
    event.preventDefault();
    options = 4;
    optQueryForm.style.display = 'none';
    AddForm();
  });

  _5Opt.addEventListener('click', (event) => {
    event.preventDefault();
    options = 5;
    optQueryForm.style.display = 'none';
    AddForm();
  });

  optQueryForm.append(optQueryInfo, _2Opt, _4Opt, _5Opt);
  document.body.append(optQueryForm);
}

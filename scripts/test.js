/***
fetch questions from local storage
push allocate the questions to a student having signed in
map the data to question divisions with question block and control block
the control block is for the next and previous buttons.
while mapping, give a unique id to each of the question divisions and hide all.
The next button shall have the id of the next question division while the previous, the previous question referencing the current
after mapping show the first question divisions
For the first question, the previous button shall be disabled while the next shall be active
The next button shall hide the current question division and show the next division.
The next button shall modify the allocated questions by adding choice and score properties to it.
on sign-in, the question divisions reflect the choices of a candidate.
When the submit button is clicked, the score property shall be reduced to an overall score and the tudent's record shall replace the question array.
*/
function Test() {
  if (candidate) {
    function FetchQuestion() {
      const jsonData = localStorage.getItem('quest');
      return JSON.parse(jsonData);
    }
    function GetCandidate() {
      const jsonData = localStorage.getItem(candidate);
      return JSON.parse(jsonData);
    }
    let questions = FetchQuestion();
    questions = { ...questions };
    let userAccount = GetCandidate();
    userAccount.push(questions);

    localStorage.setItem(candidate, JSON.stringify(userAccount));
    candidate = '';
  }
}

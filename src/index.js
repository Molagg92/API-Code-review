import './css/styles.css';
import getCurrency from './getCurrency.js';


function printElements(response, userInputUS, foreignCurrency) {
  document.querySelector('#showResponse').innterText = `${userInputUS} Dollars USD in ${foreignCurrency} currency happens to be ${response.conversion_result}`;
}

function printError(error, userInputUS, foreignCurrency) {
  document.querySelector('#showResponse').innterText = `There was an error accessing the correct data for ${userInputUS} dollards USD in ${foreignCurrency}: ${error}`;
}
function handleFormSubmission(e) {
  e.preventDefault();
  const userInputUS = document.querySelector('#userInputUS').value;
  document.querySelector('#userInputUS').value = null;
  const foreignCurrency = document.querySelector("#userInputForeign");

  getCurrency(userInputUS, foreignCurrency);
}

window.addEventListener("load", function(){
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
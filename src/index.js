import './css/styles.css';
import CurerncyService from './service.js';

//Buisness logic-------

function getCurrency(){
  CurerncyService.getCurrency()
  .then(function(response){
    const inputField = document.getElementById("InputField").value;
    const currencyExchanger = document.getElementById("currencyExchanger").value;
    document.getElementById("InputField").value = null;
    if (response.result === "success") {
     if (inputField != "" && inputField != null);
      printElements(response, inputField, currencyExchanger);
    } else if (response) {
      printError(response, currencyExchanger);
    }
  });
}

//UI Logic -----------


function printElements(response, InputField, currencyExchanger) {
  const convertionRate = response.conversion_rates;
  const convertionArray = Object.keys(response.conversion_rates);
  const results = document.getElementById("results");
  const p = document.createElement("p");
  results.append(p);
  for (let i = 0; i < convertionArray.length; i++) {
    if (convertionArray[i] === currencyExchanger) {
      const numToCon = convertionRate[convertionArray[i]];
      const resultNum = InputField * numToCon;
      p.append(`${InputField} US Dollar(s) is equal to ${resultNum} ${currencyExchanger}(s)`);
    }
  }
}


function printError(error, InputField) {
  const results = document.getElementById("results");
  const p = document.createElement("p");
  results.append(p);
  p.append(`There was an error when reaching for ${InputField}: ${error}`);
}

function handleFormSubmission(e) {
  e.preventDefault();
  getCurrency();
 }

document.querySelector('form').addEventListener("submit", handleFormSubmission);
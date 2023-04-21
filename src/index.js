import './css/styles.css';
import CurerncyService from './service.js';
import getCurrency from './getCurrency.js';


function printElements(response, userInputUS, foreinCurrency) {
  document.querySelector('#showResponse').innterText = `${userInputUS} Dollars USD in ${foreinCurrency} currency happens to be ${response.conversion_result}`
}
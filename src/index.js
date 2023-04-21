import './css/styles.css';
import CurerncyService from './service.js';

function getCurrency(foreinCurrency) {
  CurerncyService.getCurrency(foreinCurrency)
    .then(function (response) {
      if (response.main){
        printElements(response, )
      }
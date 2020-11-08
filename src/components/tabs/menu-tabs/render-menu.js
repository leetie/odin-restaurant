import { clearMenu } from './clear-menu';
import { appetizers } from './appetizers';
import { lunchAndDinnerSpecials } from './lunch-dinner';
import { riceAndMisc } from './rice-misc';
import { vegetarian } from './vegetarian';
import { mainDishes } from './main-dishes';
import { chefsSpecial } from './chefs-special';

function renderSelection(selection) {
  clearMenu();
  switch (selection) {
    case "appetizers":
      appetizers();
      break;
    case "lunchAndDinnerSpecials":
      lunchAndDinnerSpecials();
      break;
    case "riceAndMiscDishes":
      riceAndMisc();
      break;
    case "vegetarianAndHealthyOptions":
      vegetarian();
      break;
    case "mainDishes":
      mainDishes();
      break;
    case "chefsSpecial":
      chefsSpecial();
      break;
    default:
      break;
  }
}

export { renderSelection }
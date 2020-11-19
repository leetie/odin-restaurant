import { addSelectionListeners } from './menu-tabs/add-selection-listeners';

function menu() {
  let tab = document.getElementById('tab');
  tab.innerHTML = `
    <div class="container text-center"
        <img class="img img-fluid" src="../../../assets/images/main.jpg">
        <label for="menu">Choose a type of dish:</label>
        <select id="menu-select">
          <option value=""></option>
          <option value="appetizers">Appetizers</option>
          <option value="lunchAndDinnerSpecials">Lunch & Dinner Specials</option>
          <option value="riceAndMiscDishes">Rice & Misc Dishes</option>
          <option value="vegetarianAndHealthyOptions">Vegetarian & Healthy Dishes</option>
          <option value="mainDishes">Main Dishes</option>
          <option value="chefsSpecial">Chef's Special</option>
        </select>
    </div>
    <div id="menu" class="container text-center"></div>
  `
  addSelectionListeners();
}

export { menu }
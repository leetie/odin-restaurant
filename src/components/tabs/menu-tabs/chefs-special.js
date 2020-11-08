function chefsSpecial() {
  console.log('rendering chefs special dishes');
  let menu = document.getElementById('menu');
  menu.innerHTML = `
  <h3>Chef's Special</h3>
  <h4>(Served with Small White Rice)</h4>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" style="text-align:right" colspan="3">$</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">CS1</th>
        <td>Lover's Delight</td>
        <td>Sliced chicken, jumbo shrimp, with mixed vegetables in brown sauce</td>
        <td>14.10</td>
      </tr>
      <tr>
        <th scope="row">CS2</th>
        <td>Happy Family</td>
        <td>Jumbo shrimp, fresh scallop, chicken, sliced pork, and beef with assorted vegetables in a tasty brown sauce.</td>
        <td>14.10</td>
      </tr>
      <tr>
        <th scope="row">CS3</th>
        <td>Empress Trio</td>
        <td>Tender morsels of succulent chicken, shrimp, and pork enveloped in a delicate batter, deep fried and accompanied by delightful special brown sauce with baby corn, bamboo shoots, and brocolli.</td>
        <td>12.75</td>
      </tr>
      <tr>
        <th scope="row">CS4</th>
        <td>Four Seasons</td>
        <td>Shrimp, scallop, chicken and beef sauteed with mixed vegetables in chef's special brown sauce.</td>
        <td>14.10</td>
      </tr>
      <tr>
        <th scope="row">CS5 <span class="fas fa-pepper-hot"></span></th>
        <td>Crispy Shrimp</td>
        <td>Jumbo Shrimp deep fried and sauteed with straw mushroom, green & red pepper and broccoli in sweet & sour Hunan sauce.</td>
        <td>14.00</td>
      </tr>
      <tr>
        <th scope="row">CS6</th>
        <td>Tung-Ting Shrimp</td>
        <td>Jumbo shrimp marinated with assorted vegetables in white wine sauce.</td>
        <td>13.10</td>
      </tr>
      <tr>
        <th scope="row">CS7</th>
        <td>Seafood Delight</td>
        <td>Crab meat, scallops, and jumbo shrimp with fresh vegetable in delightful white sauce.</td>
        <td>16.85</td>
      </tr>
      <tr>
        <th scope="row">CS8</th>
        <td>Sesame Shrimp</td>
        <td>Crispy jumbo shrimp in brown sauce, served with roasted sesame seeds on a bed of broccoli.</td>
        <td>14.10</td>
      </tr>
      <tr>
        <th scope="row">CS9 <span class="fas fa-pepper-hot"></span></th>
        <td>Rose Shrimp</td>
        <td>Scallops and shrimp sauteed with fine black mushroom, pea pods, in spicy Hunan Sauce.</td>
        <td>14.10</td>
      </tr>
      <tr>
        <th scope="row">CS10</th>
        <td>Crispy Chicken</td>
        <td>Sliced chicken dipped in batter and fried until crispy, sauteed with broccoli in sweet and sour sauce.</td>
        <td>13.60</td>
      </tr>
      <tr>
        <th scope="row">CS11</th>
        <td>Sesame Chicken</td>
        <td></td>
        <td>12.10</td>
      </tr>
      <tr>
        <th scope="row">CS12</th>
        <td>Gai Poo Lo Mein</td>
        <td>Special prepared three dishes: Fried chicken fingers, pork Lo Mein & shrimp, chicken, beef with mixed vegetables in brown sauce.</td>
        <td>19.15</td>
      </tr>
      <tr>
        <th scope="row">CS13 <span class="fas fa-pepper-hot"></span></th>
        <td>General Tso's Chicken</td>
        <td>A mouth-watering dish made with large chunks of spring chicken deep fried in sweet & spicy sauce with broccoli.</td>
        <td>12.10</td>
      </tr>
      <tr>
        <th scope="row">CS14 <span class="fas fa-pepper-hot"></span></th>
        <td>Orange Chicken</td>
        <td>Chunks of tender chicken lightly fried, sauteed with dry hot pepper in spicy orange sauce.</td>
        <td>12.10</td>
      </tr>
      <tr>
        <th scope="row">CS15</th>
        <td>Lemon Chicken</td>
        <td>Battered chicken fried until golden brown served on top of lettuce with lemon sauce.</td>
        <td>11.65</td>
      </tr>
      <tr>
        <th scope="row">CS16 <span class="fas fa-pepper-hot"></span></th>
        <td>Yung Chow Chicken</td>
        <td>Sauteed with green pepper & snow peas.</td>
        <td>11.65</td>
      </tr>
      <tr>
        <th scope="row">CS17</th>
        <td>Sesame Bean Curd</td>
        <td></td>
        <td>11.30</td>
      </tr>
      <tr>
        <th scope="row">CS18 <span class="fas fa-pepper-hot"></span></th>
        <td>Crispy Beef Hunan Style</td>
        <td>Chunks of beef deep fried and sauteed with straw mushroom, green & red pepper and broccoli in sweet & sour Hunan sauce.</td>
        <td>13.10</td>
      </tr>
      <tr>
        <th scope="row">CS19 <span class="fas fa-pepper-hot"></span></th>
        <td>Orange Beef</td>
        <td>Chunks of beef deep fried and sauteed with dry hot pepper in a spicy orange sauce.</td>
        <td>13.10</td>
      </tr>
      <tr>
        <th scope="row">CS20</th>
        <td>Sesame Beef</td>
        <td></td>
        <td>13.10</td>
      </tr>
      <tr>
        <th scope="row">CS21</th>
        <td>Marbles Beef</td>
        <td>Scallops and juicy steak with pea pods and broccoli in chef's special sauce.</td>
        <td>14.00</td>
      </tr>
      <tr>
        <th scope="row">CS22 <span class="fas fa-pepper-hot"></span></th>
        <td>Mongolian Beef</td>
        <td>Juicy steak mixed with mild Mongolian sauce.</td>
        <td>12.95</td>
      </tr>
      <tr>
        <th scope="row">CS23 <span class="fas fa-pepper-hot"></span></th>
        <td>Yung Chow Beef</td>
        <td>Sauteed with green peppers & snow peas.</td>
        <td>12.20</td>
      </tr>
      <tr>
        <th scope="row">CS24</th>
        <td>Delight of Three</td>
        <td>Chicken, beef, shrimp and mixed vegetables sauteed with mild brown sauce.</td>
        <td>13.75</td>
      </tr>
      <tr>
        <th scope="row">CS25</th>
        <td>Seven Stars Around The Moon (For Two)</td>
        <td>Beef, Scallops, jumbo shrimps and crab meat sauteed with mixed vegetables in brown sauce. Fried boneless chicken & 7 crab rangoon on the side with special lemon sauce.</td>
        <td>19.90</td>
      </tr>
      <tr>
        <th scope="row">CS26</th>
        <td>Ho Yu Gai Poo</td>
        <td>Ham, beef, shrimp, and chicken fingers with Chinese vegetables in oyster sauce.</td>
        <td>18.65</td>
      </tr>
    </tbody>
  </table>
  `
}

export { chefsSpecial }
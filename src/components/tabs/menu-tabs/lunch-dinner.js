function lunchAndDinnerSpecials() {
  console.log('render lunch and dinner specials');
  let menu = document.getElementById('menu');
  menu.innerHTML = `
    <h3>Lunch & Dinner Specials</h3>
    <h4>Lunch Specials</h4>
    <h5>(Mon. - Sat. 11AM - 3:30PM)
    <h5>Free choice of Soup (Wonton, Egg Drop or Hot & Sour) or Appetizer (Egg Roll, Chicken Fingers, Beef Teriyaki, Crab Rangoon, or Chicken Wings) All served with Pork Fried Rice or Steamed Rice</h5>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align:right" colspan="3">$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">L1.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span>Yu Shiang Broccoli</td>
          <td></td>
          <td style="text-align:right">7.20</td>
        </tr>
        <tr>
          <th scope="row">L2.</th>
          <td>Chicken or Shrimp Chow Mein</td>
          <td></td>
          <td style="text-align:right">7.20</td>
        </tr>
        <tr>
          <th scope="row">L3.</th>
          <td>Pork or Chicken Lo Mein</td>
          <td></td>
          <td style="text-align:right">7.20</td>
        </tr>
        <tr>
          <th scope="row">L4.</th>
          <td>Sauteed Mixed Vegetables</td>
          <td></td>
          <td style="text-align:right">7.20</td>
        </tr>
        <tr>
          <th scope="row">L5.</th>
          <td>Sauteed Chicken and Shrimp</td>
          <td></td>
          <td style="text-align:right">7.40</td>
        </tr>
        <tr>
          <th scope="row">L6.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Chicken Szechuan Style <a href="" data-toggle="modal" data-target="#allergyModal">(Contains Peanuts)</a></td>
          <td></td>
          <td style="text-align:right"></td>
        </tr>
        <tr>
          <th scope="row">L7.</th>
          <td>Chicken & Broccoli</td>
          <td></td>
          <td style="text-align:right">7.40</td>
        </tr>
        <tr>
          <th scope="row">L8.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Chicken or Pork</td>
          <td></td>
          <td style="text-align:right">7.40</td>
        </tr>
        <tr>
          <th scope="row">L9.</th>
          <td>Sweet & Sour Chicken or Pork</td>
          <td></td>
          <td style="text-align:right">7.40</td>
        </tr>
        <tr>
          <th scope="row">L10.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Twice Cooked Pork</td>
          <td></td>
          <td style="text-align:right">7.40</td>
        </tr>
        <tr>
          <th scope="row">L11.</th>
          <td>Pepper Steak & Onion</td>
          <td></td>
          <td style="text-align:right">7.70</td>
        </tr>
        <tr>
          <th scope="row">L12.</th>
          <td>Shrimp & Lobster Sauce</td>
          <td></td>
          <td style="text-align:right">7.70</td>
        </tr>
        <tr>
          <th scope="row">L13.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Shrimp Szechuan Style <a href="" data-toggle="modal" data-target="#allergyModal">(Contains Peanuts)</a></td>
          <td></td>
          <td style="text-align:right">7.70</td>
        </tr>
        <tr>
          <th scope="row">L14.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Shrimp</td>
          <td></td>
          <td style="text-align:right">7.70</td>
        </tr>
        <tr>
          <th scope="row">L15.</th>
          <td>Beef with Broccoli</td>
          <td></td>
          <td style="text-align:right">7.70</td>
        </tr>
        <tr>
          <th scope="row">L16.</th>
          <td>Sesame Chicken</td>
          <td></td>
          <td style="text-align:right">7.70</td>
        </tr>
        <tr>
          <th scope="row">L17.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> General Tso's Chicken</td>
          <td></td>
          <td style="text-align:right">7.70</td>
        </tr>
        <tr>
          <th scope="row">L18.</th>
          <td>Beef Teriyaki, Boneless Ribs, and Chicken Wings</td>
          <td></td>
          <td style="text-align:right">8.70</td>
        </tr>
        <tr>
          <th scope="row">L19.</th>
          <td>Egg Rolls, Chicken Fingers, and Fried Jumbo Shrimp</td>
          <td></td>
          <td style="text-align:right">8.70</td>
        </tr>
        <tr>
          <th scope="row">L20.</th>
          <td>Crab Rangoons, Chicken Wings, and Chicken Fingers</td>
          <td></td>
          <td style="text-align:right">8.25</td>
        </tr>
        <tr>
          <th scope="row">L21.</th>
          <td>Lobster Sauce</td>
          <td></td>
          <td style="text-align:right">6.90</td>
        </tr>
      </tbody>
    </table>

    <h4>Dinner Combinations</h4>
    <h5>(Served all day)</h5>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align:right" colspan="3">$</th>
        </tr>     
      </thead>
      <tbody>
        <tr>
          <th scope="row">D1.</th>
          <td>Egg Roll, Chicken Fingers, Chicken Chow Mein, Pork Fried Rice</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">D2.</th>
          <td>Beef Terikayi, Boneless Spare Ribs, Chicken Wings, Pork Fried Rice</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">D3.</th>
          <td>Beef Teriyaki, Crab Rangoon, Chicken Fingers, Pork Fried Rice</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">D4.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Chicken or Beef Szechuan Style, Beef Teriyaki, Crab Rangoon, Pork Fried Rice <a href="" data-toggle="modal" data-target="#allergyModal">(Contains Peanuts)</a></td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">D5.</th>
          <td>Crab Rangoon, Chicken Wings, Beef or Chicken Broccoli, Pork Fried Rice</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">D6.</th>
          <td>Moo Goo Gai Pan, Boneless Spare Ribs, Chicken Wings, Pork Fried Rice</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">D7.</th>
          <td>Chicken and Shrimp, Chicken Fingers, Beef Teriyaki, Pork Fried Rice</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
      </tbody>
    </table>

    <h4>Combination Platter</h4>
    <h5>(Served all day with Egg Roll & Pork Fried Rice)</h5>
    <table class="table table-dark table-striped>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align:right" colspan="3">$</th>
        </tr> 
      </thead>
      <tbody>
        <tr>
          <th scope="row">C1.</th>
          <td>Chicken or Shrimp Chow Mein</td>
          <td></td>
          <td style="text-align:right">8.35</td>
        </tr>
        <tr>
          <th scope="row">C2.</th>
          <td>Pork or Chicken Lo Mein</td>
          <td></td>
          <td style="text-align:right">8.35</td>
        </tr>
        <tr>
          <th scope="row">C3.</th>
          <td>Sweet & Sour Chicken or Pork</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C4.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Twice Cooked Pork</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C5.</th>
          <td>Pork & String Beans</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C6.</th>
          <td>Chicken & Cashew Nuts <a href="" data-toggle="modal" data-target="#allergyModal">(Contains Nuts)</a></td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C7.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Chicken</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C8.</th>
          <td>Chicken & Broccoli</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C9.</th>
          <td>Pepper Steak & Onion</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C10.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Shredded Beef Szechuan Style <a href="" data-toggle="modal" data-target="#allergyModal">(Contains Peanuts)</a></td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C11.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Sha Cha Shrimp</td>
          <td></td>
          <td style="text-align:right">9.10</td>
        </tr>
        <tr>
          <th scope="row">C12.</th>
          <td>Assorted Vegetables & Shrimp</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">C13.</th>
          <td>Shrimp & Lobster Sauce</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">C14.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> General Tso's Chicken</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">C15.</th>
          <td>Sesame Chicken</td>
          <td></td>
          <td style="text-align:right">9.45</td>
        </tr>
        <tr>
          <th scope="row">C16.</th>
          <td>Beef with Mixed Vegetables</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">C17.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Chicken & Garlic Sauce</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
      </tbody>
    </table>
  `
}

export { lunchAndDinnerSpecials }
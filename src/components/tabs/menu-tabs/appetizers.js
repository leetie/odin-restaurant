function appetizers() {
  console.log('you selected the appetizers option');
  let menu = document.getElementById('menu');
  menu.innerHTML = `
    <h3>Appetizers</h3>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align:right" colspan="4">$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1.<th>
          <td>Egg Rolls (2)</td>
          <td></td>
          <td style="text-align:right">5.10</td>
        </tr>
        <tr>
          <th scope="row">2.<th>
          <td>Spring Rolls (2) (No Meat)</td>
          <td></td>
          <td style="text-align:right">4.60</td>
        </tr>
        <tr>
          <th scope="row">3.<th>
          <td>Steamed or Fried Dumpling</td>
          <td></td>
          <td style="text-align:right">7.80</td>
        </tr>
        <tr>
          <th scope="row">4.<th>
          <td>B-B-Q Spare Ribs</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">5<th>
          <td>B-B-Q Boneless Ribs</td>
          <td></td>
          <td style="text-align:right">9.10</td>
        </tr>
        <tr>
          <th scope="row">6<th>
          <td>Teriyaki Beef (6)</td>
          <td></td>
          <td style="text-align:right">9.50</td>
        </tr>
        <tr>
          <th scope="row">7<th>
          <td>Teriyaki Chicken (6)</td>
          <td></td>
          <td style="text-align:right">8.80</td>
        </tr>
        <tr>
          <th scope="row">8<th>
          <td>Chicken Fingers</td>
          <td></td>
          <td style="text-align:right">8.70</td>
        </tr>
        <tr>
          <th scope="row">9<th>
          <td>Chicken Wings</td>
          <td></td>
          <td style="text-align:right">8.70</td>
        </tr>
        <tr>
          <th scope="row">10<th>
          <td>Fried Wontons</td>
          <td></td>
          <td style="text-align:right">5.55</td>
        </tr>
        <tr>
          <th scope="row">11<th>
          <td>Crab Rangoons (14)</td>
          <td></td>
          <td style="text-align:right">8.25</td>
        </tr>
        <tr>
          <th scope="row">12<th>
          <td>Fried Jumbo Shrimp</td>
          <td></td>
          <td style="text-align:right">9.10</td>
        </tr>
        <tr>
          <th scope="row">13<th>
          <td>Tempura Vegetable</td>
          <td></td>
          <td style="text-align:right">6.25</td>
        </tr>
        <tr>
          <th scope="row">14<th>
          <td>Scallion Pancake</td>
          <td></td>
          <td style="text-align:right">6.25</td>
        </tr>
        <tr>
          <th scope="row">15<th>
          <td>Pu Pu Platter (for 2)</td>
          <td>Egg rolls, Boneless Ribs, Chicken Wings, Beef Teriyaki, Crab Rangoon, Chicken Fingers, Fried Jumbo Shrimp (Each Additional Person: $10.50)</td>
          <td style="text-align:right">21.00</td>
        </tr>
      </tbody>
    </table>

    <h3>Appetizer Combinations</h3>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align:right" colspan="4">$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">A1.<th>
          <td>Teriyaki Beef, Boneless Ribs, Egg Roll, Crab Rangoon</td>
          <td></td>
          <td style="text-align:right">9.70</td>
        </tr>
        <tr>
          <th scope="row">A2.<th>
          <td>Fried Jumbo Shrimp, Boneless Rib, Egg Roll, Fried Wonton</td>
          <td></td>
          <td style="text-align:right">9.70</td>
        </tr>
        <tr>
          <th scope="row">A3.<th>
          <td>Chicken Fingers, Boneless Ribs, Egg Roll, Crab Rangoon</td>
          <td></td>
          <td style="text-align:right">9.70</td>
        </tr>
        <tr>
          <th scope="row">A4.<th>
          <td>Chicken Wings, Boneless Ribs, Egg Roll, Fried Wonton</td>
          <td></td>
          <td style="text-align:right">9.70</td>
        </tr>
      </tbody>
    </table>

    <h3>Soup</h3>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col" colspan="1">#</th>
          <th scope="col" style="text-align:right" colspan="3">Pt.</th>
          <th scope="col" style="text-align:right" colspan="1">Qt.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">16.<th>
          <td>Egg Drop Soup</td>
          <td style="text-align:right">1.80</td>
          <td style="text-align:right">3.20</td>
        </tr>
        <tr>
          <th scope="row">17.<th>
          <td>Wonton Soup</td>
          <td style="text-align:right">2.20</td>
          <td style="text-align:right">3.75</td>
        </tr>
        <tr>
          <th scope="row">18.<th>
          <td>Egg Drop Wonton Soup</td>
          <td style="text-align:right">2.20</td>
          <td style="text-align:right">3.75</td>
        </tr>
        <tr>
          <th scope="row">19.<th>
          <td><span class="fas fa-pepper-hot"></span><span>  </span>Hot & Sour Soup</td>
          <td style="text-align:right">2.45</td>
          <td style="text-align:right">3.85</td>
        </tr>
        <tr>
          <th scope="row">20.<th>
          <td>Chicken Noodle (or Rice) Soup</td>
          <td style="text-align:right">1.80</td>
          <td style="text-align:right">3.20</td>
        </tr>
      </tbody>
    </table>
  `
}

export { appetizers } 
function mainDishes() {
  console.log('rendering main dishes');
  let menu = document.getElementById('menu');
  menu.innerHTML = `
  <h3>Meat, Poultry & Seafood Dishes</h3>
  <h4>Pork <small>(With small white rice)</small></h4>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col" colspan="1">#</th>
        <th scope="col" style="text-align:right" colspan="3"></th>
        <th scope="col" style="text-align:right" colspan="1">Qt.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">50.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Twice Cooked Pork</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">51.<th>
        <td>Pork & Scallion</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">52.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span>Pork & Black Bean Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">53.<th>
        <td>Pork & Mixed Vegetables</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">54.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Sha Cha Pork</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">55.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Spicy Pork</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">56.<th>
        <td>Pork & Broccoli</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">57.<th>
        <td>Pork & Mushroom</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">58.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Szechuan Style Pork <a href="#">(Contains Peanuts)</a></td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
      <tr>
        <th scope="row">59.<th>
        <td>Pork with Mushroom & Bamboo Shoots</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">10.70</td>
      </tr>
    </tbody>
  </table>

  <h4>Poultry <small>(With small white rice)</small></h4>
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
        <th scope="row">60.<th>
        <td>Chicken & Vegetables</td>
        <td style="text-align:right">6.45</td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">61.<th>
        <td>Chicken & Shrimp</td>
        <td style="text-align:right">6.45</td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">62.<th>
        <td>Moo Goo Gai Pan</td>
        <td style="text-align:right">6.45</td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">63.<th>
        <td>Chicken & Cashew Nuts <a href="#">(Contains Nuts)</a></td>
        <td style="text-align:right">6.45</td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">64.<th>
        <td>Chicken & Broccoli</td>
        <td style="text-align:right">6.45</td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">65.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Spicy Chicken</td>
        <td style="text-align:right">6.35</td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">66.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Chicken & Curry Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">67.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Chicken & Black Bean Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">68.<th>
        <td>Shredded Chicken & Scallion</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">69.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Chicken & Garlic Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">70.<th>
        <td>Chicken & String Bean</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">71.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Szechuan Style Chicken <a href="#">(Contains Peanuts)</a></td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.20</td>
      </tr>
      <tr>
        <th scope="row">72.<th>
        <td>Chicken & Pea Pod</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.50</td>
      </tr>
      <tr>
        <th scope="row">73.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Hunan Style Chicken</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.50</td>
      </tr>
      <tr>
        <th scope="row">74.<th>
        <td>Hon-Sao Chicken <small>(chicken fingers and mixed vegetables in special brown sauce)</small></td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.50</td>
      </tr>
      <tr>
        <th scope="row">75.<th>
        <td>Chicken with Mushroom & Bamboo Shoots</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">11.40</td>
      </tr>
    </tbody>
  </table>

  <h4>Seafood <small>(With small white rice)</small></h4>
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
        <th scope="row">76.<th>
        <td>Baby Shrimp & Cashew Nuts <a href="#">(Contains Nuts)</a></td>
        <td style="text-align:right">7.25</td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">77.<th>
        <td>Shrimp & Broccoli</td>
        <td style="text-align:right">7.25</td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">78.<th>
        <td>Shrimp & Mixed Vegetables</td>
        <td style="text-align:right">7.25</td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">79.<th>
        <td>Shrimp & Lobster Sauce</td>
        <td style="text-align:right">7.50</td>
        <td style="text-align:right">13.55</td>
      </tr>
      <tr>
        <th scope="row">80.<th>
        <td>Lobster Sauce</td>
        <td style="text-align:right">4.80</td>
        <td style="text-align:right">8.75</td>
      </tr>
      <tr>
        <th scope="row">81.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Szechuan Style Shrimp <a href="#">(Contains Peanuts)</a></td>
        <td style="text-align:right"></td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">82.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Baby Shrimp & Black Bean Sauce</td>
        <td style="text-align:right">6.45</td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">83.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Shrimp & Chili Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">84.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Sha Cha Shrimp</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">85.<th>
        <td>Shrimp & String Bean</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">86.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Spicy Shrimp</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">87.<th>
        <td>Shrimp & Pea Pod</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">13.30</td>
      </tr>
      <tr>
        <th scope="row">88.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Scallops & Black Bean Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">14.80</td>
      </tr>
      <tr>
        <th scope="row">89.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Scallops & Chili Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">14.80</td>
      </tr>
    </tbody>
  </table>

  <h4>Beef <small>(With small white rice)</small></h4>
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
        <th scope="row">90.<th>
        <td>Beef & String Beans</td>
        <td style="text-align:right">6.85</td>
        <td style="text-align:right">12.10</td>
      </tr>
      <tr>
        <th scope="row">91.<th>
        <td>Beef & Scallion</td>
        <td style="text-align:right">6.85</td>
        <td style="text-align:right">12.10</td>
      </tr>
      <tr>
        <th scope="row">92.<th>
        <td>Pepper Steak & Onions</td>
        <td style="text-align:right">6.85</td>
        <td style="text-align:right">12.10</td>
      </tr>
      <tr>
        <th scope="row">93.<th>
        <td>Beef & Broccoli</td>
        <td style="text-align:right">6.85</td>
        <td style="text-align:right">12.10</td>
      </tr>
      <tr>
        <th scope="row">94.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Szechuan Style Shredded Beef <a href="#">(Contains Peanuts)</a></td>
        <td style="text-align:right">6.85</td>
        <td style="text-align:right">12.10</td>
      </tr>
      <tr>
        <th scope="row">95.<th>
        <td>Beef & Mixed Vegetables</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.10</td>
      </tr>
      <tr>
        <th scope="row">96.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Szechuan Style Beef <a href="#">(Contains Peanuts)</a></td>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.10</td>
      </tr>
      <tr>
        <th scope="row">97.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Beef & Curry Sauce</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.15</td>
      </tr>
      <tr>
        <th scope="row">98.<th>
        <td>Beef & Mushroomtd>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.75</td>
      </tr>
      <tr>
        <th scope="row">99.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Sha Cha Beef</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.15</td>
      </tr>
      <tr>
        <th scope="row">100.<th>
        <td><span class="fas fa-pepper-hot">&nbsp</span> Hunan Style Beef</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.40</td>
      </tr>
      <tr>
        <th scope="row">101.<th>
        <td>Beef & Pea Pod</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.40</td>
      </tr>
      <tr>
        <th scope="row">102.<th>
        <td>Beef with Mushroom & Bamboo Shoots</td>
        <td style="text-align:right"></td>
        <td style="text-align:right">12.40</td>
      </tr>
    </tbody>
  </table>
  `
}

export { mainDishes }
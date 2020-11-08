function vegetarian() {
  console.log('rendering vegetarian and healthy dishes');
  let menu = document.getElementById('menu');
  menu.innerHTML = `
    <h3>Vegetarian & Healthy Dishes</h3>
    <h4>Vegetables <small>(With small white rice)</small></h4>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align:right" colspan="3">$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">101.</th>
          <td>Vegetarian's Delight</td>
          <td></td>
          <td style="text-align:right">9.25</td>
        </tr>
        <tr>
          <th scope="row">102.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Assorted Vegetables</td>
          <td></td>
          <td style="text-align:right">9.25</td>
        </tr>
        <tr>
          <th scope="row">103.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang Broccoli</td>
          <td></td>
          <td style="text-align:right">9.25</td>
        </tr>
        <tr>
          <th scope="row">104.</th>
          <td>Bamboo Shoots, Mushrooms & Pea Pods</td>
          <td></td>
          <td style="text-align:right">10.25</td>
        </tr>
        <tr>
          <th scope="row">105.</th>
          <td>Sauteed Water Chestnuts & Pea Pods</td>
          <td></td>
          <td style="text-align:right">10.25</td>
        </tr>
        <tr>
          <th scope="row">106.</th>
          <td>Bean Curd & Broccoli</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">107.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Szechuan Bean Curd</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">108.</th>
          <td>Bean Curd & Black Mushroom</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">109.</th>
          <td>Fried Bean Curd & Vegetables</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">110.</th>
          <td>Dried Sauteed String Bean</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">111.</th>
          <td><span class="fas fa-pepper-hot">&nbsp</span> Yu Shiang String Bean</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">112.</th>
          <td>String Beans & Garlic Sauce</td>
          <td></td>
          <td style="text-align:right">9.55</td>
        </tr>
      </tbody>
    </table>

    <h4>Healthy Dishes</h4>
    <h5>(With small white rice - Brown or White Sauce on the side)</h5>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align:right" colspan="3">$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">HM1.</th>
          <td>Steamed Garden Vegetables</td>
          <td></td>
          <td style="text-align:right">10.15</td>
        </tr>
        <tr>
          <th scope="row">HM2.</th>
          <td>Steamed Mixed Veg. & Chicken</td>
          <td></td>
          <td style="text-align:right">11.40</td>
        </tr>
        <tr>
          <th scope="row">HM3.</th>
          <td>Steamed Mixed Veg. & Jumbo Shrimp</td>
          <td></td>
          <td style="text-align:right">13.25</td>
        </tr>
        <tr>
          <th scope="row">HM4.</th>
          <td>Steamed Chicken & Broccoli</td>
          <td></td>
          <td style="text-align:right">11.40</td>
        </tr>
        <tr>
          <th scope="row">HM5.</th>
          <td>Steamed Mixed Veg. & Bean Curd</td>
          <td></td>
          <td style="text-align:right">10.35</td>
        </tr>
        <tr>
          <th scope="row">HM6.</th>
          <td>Steamed Scallops, Shrimp & Chicken with Mixed Vegetables</td>
          <td></td>
          <td style="text-align:right">13.95</td>
        </tr>
      </tbody>
    </table>
  `
}

export { vegetarian }
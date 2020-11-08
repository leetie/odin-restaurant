function riceAndMisc() {
  console.log('render rice and misc');
  let menu = document.getElementById('menu');
  menu.innerHTML = `
    <h3>Rice, Noodle Dishes & Misc.</h3>
    <h4>Fried Rice</h4>
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
          <th scope="row">22.<th>
          <td>Choice of Pork, Beef, or Chicken</td>
          <td style="text-align:right">4.95</td>
          <td style="text-align:right">7.80</td>
        </tr>
        <tr>
          <th scope="row">23.<th>
          <td>Shrimp Fried Rice</td>
          <td style="text-align:right">5.55</td>
          <td style="text-align:right">8.70</td>
        </tr>
        <tr>
          <th scope="row">24.<th>
          <td>Vegetable Fried Rice</td>
          <td style="text-align:right">4.60</td>
          <td style="text-align:right">7.60</td>
        </tr>
        <tr>
          <th scope="row">25.<th>
          <td>House Special Fried Rice</td>
          <td style="text-align:right">6.05</td>
          <td style="text-align:right">9.50</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Ham Fried Rice</td>
          <td style="text-align:right">5.00</td>
          <td style="text-align:right">8.05</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Any Subgum Style Extra:</td>
          <td style="text-align:right">0.80</td>
          <td style="text-align:right">1.20</td>
        </tr>
      </tbody>
    </table>

    <h4>Lo Mein</h4>
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
          <th scope="row">26.<th>
          <td>Choice of Pork, Beef, or Chicken</td>
          <td style="text-align:right">5.25</td>
          <td style="text-align:right">8.90</td>
        </tr>
        <tr>
          <th scope="row">27.<th>
          <td>Shrimp Lo Mein</td>
          <td style="text-align:right">5.75</td>
          <td style="text-align:right">9.10</td>
        </tr>
        <tr>
          <th scope="row">28.<th>
          <td>Vegetable Lo Mein</td>
          <td style="text-align:right">4.85</td>
          <td style="text-align:right">8.45</td>
        </tr>
        <tr>
          <th scope="row">29.<th>
          <td>House Special Lo Mein</td>
          <td style="text-align:right">6.15</td>
          <td style="text-align:right">9.50</td>
        </tr>
        <tr>
          <th scope="row">30.<th>
          <td>Three Delight's Pan Fried Noodles</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">9.50</td>
        </tr>
        <tr>
          <th scope="row">31.<th>
          <td>Vegetable Pan Fried Noodles</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">9.50</td>
        </tr>
        <tr>
          <th scope="row">32.<th>
          <td>Pan Fried Noodles</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">5.75</td>
        </tr>
      </tbody>
    </table>

    <h4>Egg Foo Young</h4>
    <h5>(With small white rice)</h5>
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
          <th scope="row">33.<th>
          <td>Choice of Pork, Beef, or Chicken</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">9.30</td>
        </tr>
        <tr>
          <th scope="row">34.<th>
          <td>Shrimp Egg Foo Young</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">35.<th>
          <td>Vegetable Egg Foo Young</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">8.75</td>
        </tr>
      </tbody>
    </table>

    <h4>Chow Mein <small>(With Crispy Noodles)</small></h4>
    <h4>Chop Suey <small>(With small white rice)</small></h4>
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
          <th scope="row">36.<th>
          <td>Choice of Pork, Chicken, or Beef</td>
          <td style="text-align:right">4.95</td>
          <td style="text-align:right">8.40</td>
        </tr>
        <tr>
          <th scope="row">37.<th>
          <td>Shrimp</td>
          <td style="text-align:right">5.55</td>
          <td style="text-align:right">9.15</td>
        </tr>
        <tr>
          <th scope="row">38.<th>
          <td>Vegetable</td>
          <td style="text-align:right">4.60</td>
          <td style="text-align:right">8.10</td>
        </tr>
        <tr>
          <th scope="row">39.<th>
          <td>House Special</td>
          <td style="text-align:right">6.05</td>
          <td style="text-align:right">9.75</td>
        </tr>
      </tbody>
    </table>

    <h4>Chow Fun <small>(Flat Rice Noodles)</small></h4>
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
          <th scope="row">40.<th>
          <td>Choice of Pork, Chicken, or Beef</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">9.55</td>
        </tr>
        <tr>
          <th scope="row">41.<th>
          <td>Shrimp Chow Fun</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">9.90</td>
        </tr>
        <tr>
          <th scope="row">42.<th>
          <td>House Special Chow Fun</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">10.35</td>
        </tr>
        <tr>
          <th scope="row">42A.<th>
          <td>Chow Mei Fun <small>(Thin Rice Noodle)</small><br>
          Choice of Chicken, Pork, Beef, or Shrimp
          </td>
          <td style="text-align:right"></td>
          <td style="text-align:right">10.35</td>
        </tr>
      </tbody>
    </table>

    <h4>Moo She</h4>
    <h5>(With five pancakes & Hoisin sauce)</h5>
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
          <th scope="row">43.<th>
          <td>Choice of Pork, Chicken, or Beef</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">10.30</td>
        </tr>
        <tr>
          <th scope="row">44.<th>
          <td>Moo She Shrimp</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">11.00</td>
        </tr>
        <tr>
          <th scope="row">45.<th>
          <td>Moo She Vegetable</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">9.75</td>
        </tr>
      </tbody>
    </table>

    <h4>Sweet And Sour</h4>
    <h5>(With small white rice)</h5>
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
          <th scope="row">46.<th>
          <td>Sweet and Sour Chicken</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">10.65</td>
        </tr>
        <tr>
          <th scope="row">47.<th>
          <td>Sweet and Sour Pork</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">10.65</td>
        </tr>
        <tr>
          <th scope="row">48.<th>
          <td>Sweet and Sour Shrimp</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">11.95</td>
        </tr>
        <tr>
          <th scope="row">49.<th>
          <td>Sweet and Sour Triple Delight</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">12.40</td>
        </tr>
      </tbody>
    </table>

    <h4>Side Orders</h4>
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
          <th scope="row"><th>
          <td>White Rice</td>
          <td style="text-align:right">2.00</td>
          <td style="text-align:right">2.90</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Pancakes <small>(each)</small></td>
          <td style="text-align:right"></td>
          <td style="text-align:right">0.45</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Crispy Noodles <small>(bag)</small)</td>
          <td style="text-align:right"></td>
          <td style="text-align:right">0.45</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Fortune Cookies <small>(4)</small></td>
          <td style="text-align:right"></td>
          <td style="text-align:right">0.50</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Almond Cookies <small>(4)</small></td>
          <td style="text-align:right"></td>
          <td style="text-align:right">1.20</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Home Made Duck Sauce <small>(each)</small></td>
          <td style="text-align:right"></td>
          <td style="text-align:right">0.50</td>
        </tr>
        <tr>
          <th scope="row"><th>
          <td>Home Made Hot Mustard <small>(each)</small></td>
          <td style="text-align:right"></td>
          <td style="text-align:right">0.40</td>
        </tr>
      </tbody>
    </table>
  `
}

export { riceAndMisc }
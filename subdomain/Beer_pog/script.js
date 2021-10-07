const url = "https://api.punkapi.com/v2/beers";

fetch(`${url}`)
  .then((response) => {
    return response.json();
  })
  .then((resData) => {
    const beerSelect = document.querySelector("#beerSelect");
    // const title2 = document.querySelector(".title-2");
    const apidata = document.querySelector(".api-data");
    const image = document.querySelector(".image");

    for (i = 0; i < resData.length; i++) {
      beerSelect.innerHTML += `<option id="${resData[i].id}">${resData[i].name}</option>`;
    }

    beerSelect.addEventListener("change", function () {
      // title2.innerHTML = "";
      image.innerHTML = "";
      apidata.innerHTML = "";

      var value = beerSelect.options[beerSelect.selectedIndex].id - 1;

      beerInfo(value);

      function beerInfo(id) {
        // title2.innerHTML = `${resData[id].name}`;
        image.innerHTML = `<img src=${resData[id].image_url}>`;
        apidata.innerHTML += `<li>Tagline: <span>${resData[id].tagline}</span></li>`;
        apidata.innerHTML += `<li>First brewed: <span>${resData[id].first_brewed}</span></li>`;
        apidata.innerHTML += `<li>description: <span>${resData[id].description}</span></li>`;
        apidata.innerHTML += `<li>alcohol by volume: <span id="abv">${resData[id].abv}</span></li>`;
        apidata.innerHTML += `<li>ph: <span>${resData[id].ph}</span></li>`;
        apidata.innerHTML += `<li>attenuation level: <span>${resData[id].attenuation_level}</span></li>`;

        apidata.innerHTML += `<li>malt:</li>`;

        for (i = 0; i < resData[id].ingredients.malt.length; i++) {
          apidata.innerHTML += `<li><span>${resData[id].ingredients.malt[i].name}</span></li>`;
        }

        apidata.innerHTML += `<li>yeast: <span>${resData[id].ingredients.yeast}</span></li>`;

        apidata.innerHTML += `<li>food pairing: <span>${resData[id].food_pairing}</span></li>`;
        apidata.innerHTML += `<li>brewers tips: <span>${resData[id].brewers_tips}</span></li>`;
      }
    });

    

    document.querySelector("#bacSubmit2").addEventListener("click", function () {
      BAC();
    });

    function BAC() {
      var mLOfBeers = parseFloat(document.querySelector("#mLOfBeers").value);
      var bodyWeight = parseFloat(document.querySelector("#bodyWeight2").value);
      var gender = document.querySelector("#gender2").value;
      if (document.querySelector("#abv") != null) {
        var beerABV = document.querySelector("#abv").textContent;
      }
      var modalParagraph = document.querySelector(".modal-paragraph");
      var modal = document.querySelector("#modal");
      var modalBtn = document.querySelector(".modal-btn");

      if (beerABV == undefined) {
        // alert("Choose your beer first");
        modal.classList.add("visible");
        modalParagraph.innerHTML = `Choose your beer first`;
        modalBtn.addEventListener("click", function () {
          modal.classList.remove("visible");
        });
        return false;
      }

      if (mLOfBeers === "" || isNaN(mLOfBeers)) {
        // alert("Insert mL of beer");
        modal.classList.add("visible");
        modalParagraph.innerHTML = `Insert mL of beer`;
        modalBtn.addEventListener("click", function () {
          modal.classList.remove("visible");
        });
        return false;
      }
      if (bodyWeight === "" || isNaN(bodyWeight)) {
        // alert("Insert your weight plz");
        modal.classList.add("visible");
        modalParagraph.innerHTML = `Insert your weight`;
        modalBtn.addEventListener("click", function () {
          modal.classList.remove("visible");
        });
        return false;
      }
      if (gender === "" || (gender.toLowerCase() != "male" && gender.toLowerCase() != "female")) {
        // alert("Insert your gender (Male or Female)");
        modal.classList.add("visible");
        modalParagraph.innerHTML = `Insert your gender (Male or Female)`;
        modalBtn.addEventListener("click", function () {
          modal.classList.remove("visible");
        });
        return false;
      } else {
        beerABV = parseFloat(beerABV);

        // BAC = [Alcohol consumed in grams / (Body weight in grams x R)] X 100
        // Alcohol consumed in grams = Volume [ml] x Vol-% x 0.816 [g/ml]

        var alcoholConsumed = percentage(mLOfBeers, beerABV) * 0.816;
        var bodyWeightGrams = bodyWeight * 1000;
        var R = 0;

        if (gender.toLowerCase() === "male") {
          R = 0.68;
          var result = (alcoholConsumed / (bodyWeightGrams * R)) * 100;
          result = result.toFixed(4);
          if (result <= 0.05) {
            result = document.querySelector("#result2").innerHTML = `Your result is: ${result}. You can drive!<span class="result-span">👍</span>`;
          } else {
            result = document.querySelector("#result2").innerHTML = `Your result is: ${result}. Call a taxi!<span class="result-span">🚕</span>`;
          }

          return result;
        }

        if (gender.toLowerCase() === "female") {
          R = 0.55;
          var result = (alcoholConsumed / (bodyWeightGrams * R)) * 100;
          result = result.toFixed(4);
          if (result <= 0.05) {
            result = document.querySelector("#result2").innerHTML = `Your result is: ${result}. You can drive!<span class="result-span">👍</span>`;
          } else {
            result = document.querySelector("#result2").innerHTML = `Your result is: ${result}. Call a taxi!<span class="result-span">🚕</span>`;
          }
          return result;
        }
      }
    }
  });

function close() {
  var modal = document.querySelector("#modal");
  modal.classList.remove("visible");
}

function percentage(num, per) {
  return (num / 100) * per;
}
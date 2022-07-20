/* eslint-disable quotes */
// select

let x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

// select sort by
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-sort");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "sort-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "sort-items sort-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSort(this);
    this.nextSibling.classList.toggle("sort-hide");
    this.classList.toggle("sort-arrow-active");
  });
}

function closeAllSort(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("sort-items");
  y = document.getElementsByClassName("sort-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("sort-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("sort-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSort);

// items

const items = [
  {
    name: "Volkswagen Tiguan",
    year: 2019,
    price: "3480$",
    range: "19,855 km",
    drive: "automatic",
    type: "diesel",
    url: "../img/item",
    status: "active",
  },
  {
    name: "Volkswagen Tiguan",
    year: 2019,
    price: "3480$",
    range: "19,855 km",
    drive: "automatic",
    type: "diesel",
    url: "../img/item",
    status: "new",
  },
  {
    name: "Volkswagen Tiguan",
    year: 2019,
    price: "3480$",
    range: "19,855 km",
    drive: "automatic",
    type: "diesel",
    url: "../img/item",
    status: "active",
  },
  {
    name: "Volkswagen Tiguan",
    year: 2019,
    price: "3480$",
    range: "19,855 km",
    drive: "automatic",
    type: "diesel",
    url: "../img/item",
    status: "sold",
  },
];

function getItems() {
  const offers = document.querySelector(".offers__wrapper");
  let output = "";
  let itemsCount = 1;
  items.forEach((item) => {
    // markup block
    output += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">`;
    output += `<div class=" offers__item">`;
    //img
    output += `<img class="img-fluid w-100 new" src="${
      item.url
    }-${itemsCount++}.png" alt="${item.name}">`;
    // name and year
    output += `
        <div class="offers__wrapper-content">
        <div class="offers__content d-flex flex-row mt-3">
        <span class="offers__year">${item.year}</span>
        `;
    output += `
        <h4 class="offers__name">${item.name}</h4>
        </div>
        `;
    // range
    output += `
        <div class="offers__description mt-2">
        <span class="offers__range text-capitalize d-inline-flex">${item.range}</span>
        <span class="offers__drive text-capitalize d-inline-flex">${item.drive}</span>
        <span class="offers__type text-capitalize d-inline-flex">${item.type}</span>
        </div>
        `;
    output += `<div class="offers__price">${item.price}</div>`;

    output += "</div></div></div>";
  });
  offers.insertAdjacentHTML("afterbegin", output);
}

getItems(items);

const item = document.querySelectorAll(".offers__item");

item.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let title = item.querySelector(".offers__name");
    setTimeout(() => {
      title.classList.add("text-decoration-underline");
    }, 50);
  });
  item.addEventListener("mouseout", () => {
    let title = item.querySelector(".offers__name");
    setTimeout(() => {
      title.classList.remove("text-decoration-underline");
    }, 50);
  });
});

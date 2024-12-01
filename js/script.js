var AllBtn = document.querySelectorAll(".btn");
var content = document.querySelector("#content");
var showprice = document.querySelector("#showprice");
var price = document.querySelector("#price");
var totalprice = 0;

AllBtn.forEach(function (item) {
  item.onclick = function () {
    content.innerHTML += item.getAttribute("product") + "<br>";
    totalprice += +item.getAttribute("price");
  };
});
showprice.onclick = function () {
  price.innerHTML = totalprice;
};

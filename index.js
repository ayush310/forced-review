var yes = function (e) {
  window.alert("Thank you 😍");
  window.location.reload();
};
var no = function () {
  var noBox = document.getElementById("no");
  noBox.style.position = "fixed";
  noBox.style.top = Math.random() * 80 + "vh";
  noBox.style.left = Math.random() * 80 + "vw";
  console.log(noBox);
};

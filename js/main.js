let color = [
  "#222f3e",
  "#f0dde8",
  "#ddf097",
  "#9a936f",
  "#d3c0c2",
  "#4696D3",
  "#46D300",
  "#D384C7",
  "#feea54",
  "#619a8b",
  "#a5bdd9",
  "#4f989e",
];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i];
});

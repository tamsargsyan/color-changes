let color = ["#f0dde8", "#ddf097", "#9a936f", "#d3c0c2", "#4696D3"];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i];
});

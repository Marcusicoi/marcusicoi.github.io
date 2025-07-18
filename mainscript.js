let colors = [
  "#ff0000", "#ff0077",
  "#ff00ff", "#7700ff",
  "#0000ff", "#00aaff",
  "#00ffff", "#00ffaa",
  "#00ff00", "#aaff00",
  "#ffff00", "#ff7700",
];
let as = document.getElementsByTagName("a");
let index = -1;
for (let i = 0; i < as.length; i++) {
  index++;
  if (index >= colors.length) index = 0;
  as[i].style.background = colors[index];
};
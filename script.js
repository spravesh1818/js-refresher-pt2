var mtable = document.getElementById("mtable");

let mtableData = "";

let number = 5;
for (var i = 1; i <= 10; i++) {
  const result = number * i;
  mtableData += `${number}x${i}=${result}<br/>`;
}

mtable.innerHTML = mtableData;

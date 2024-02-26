var mtable = document.getElementById("mtable");
function multiplicationTable(number, n, mtableData) {
  for (var i = 1; i <= n; i++) {
    const result = number * i;
    mtableData += `${number}x${i}=${result}<br/>`;
  }

  return mtableData;
}

//gather all positions here; for now, display positions.
const objectPositionsList =[];

function declareObjectPositions() {
  var arrayLength = objectPositionsList.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    var rect = i.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
  }
}

//gather all positions here; for now, display positions.
const objectPositionsList =[];

function declareObjectPositions() {
  var arrayLength = objectPositionsList.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log("attempting to show coordinates");
    
    //console.log(objectPositionsList[i]);
    //console.log(objectPositionsList[i].position);
    console.log(objectPositionsList[i].position.x);
    console.log(objectPositionsList[i].position.y);
    
    /*FAILURES:
      //var rect = i.getBoundingClientRect();
      //console.log(rect.top, rect.right, rect.bottom, rect.left);
      console.log(i.position());
      console.log(i.position(x));
      console.log(i.position(y));
    */
  }
  objectPositionsList =[];
}

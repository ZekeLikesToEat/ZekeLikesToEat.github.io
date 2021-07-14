//gather all positions here; for now, display positions.
const objectPositionsList =[];

function declareObjectPositions() {
  var arrayLength = objectPositionsList.length;
  for (var i = 0; i < arrayLength; i++) {
    var ob = objectPositionsList[i];
    console.log(ob.objectName + ", X: " 
                +ob.position.x.toFixed(2) + ", Y: " 
                +ob.position.y.toFixed(2));
    isThereACollision(ob);
  }
  objectPositionsList.length =0;
}
 
function isThereACollision(var ob) {
   var arrayLength = objectPositionsList.length;
  for (var i = 0; i < arrayLength; i++) {
    if(objectPositionsList[i] = ob) return;
    if(Math.abs(ob.position.x - objectPositionsList[i].x)< objectPositionsList[i].size) {
       console.log(ob.objectName + " collided with " +  
       objectPositionsList[i].objectName + " on the X axis at : " +
       ob.position.x.toFixed(2) + " = " +
       objectPositionsList[i].position.x.toFixed(2));   
    }
    if(Math.abs(ob.position.y - objectPositionsList[i].y)< objectPositionsList[i].size) {
       console.log(ob.objectName + " collided with " +  
       objectPositionsList[i].objectName + " on the y axis at : " +
       ob.position.x.toFixed(2) + " = " +
       objectPositionsList[i].position.x.toFixed(2));   
    }
    if((Math.abs(ob.position.x - objectPositionsList[i].x)> objectPositionsList[i].size) &&
      (Math.abs(ob.position.y - objectPositionsList[i].y)< objectPositionsList[i].size))
    {
      console.log("No collision");
    }
  }
}

    /*SUCCESS
    console.log("attempting to show coordinates");
    console.log(objectPositionsList[i]);
    console.log(objectPositionsList[i].position);
    console.log(objectPositionsList[i].position.x);
    console.log(objectPositionsList[i].position.y);
    */
    
    /*FAILURES:
      //var rect = i.getBoundingClientRect();
      //console.log(rect.top, rect.right, rect.bottom, rect.left);
      console.log(i.position());
      console.log(i.position(x));
      console.log(i.position(y));
    */

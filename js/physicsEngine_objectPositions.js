//gather all positions here; for now, display positions.
const objectPositionsList =[];

function declareObjectPositions() {
  var arrayLength = objectPositionsList.length;
  for (var i = 0; i < arrayLength; i++) {
    var ob = objectPositionsList[i];
    /*console.log(ob.objectName + ", X: " 
                +ob.position.x.toFixed(2) + ", Y: " 
                +ob.position.y.toFixed(2));*/
    isThereACollision(ob);
  }
  objectPositionsList.length =0;
}
 
function isThereACollision(ob) {
   var arrayLength = objectPositionsList.length; 
  for (var i = 0; i < arrayLength; i++) {
    var other = objectPositionsList[i];
    if(other.objectName === ob.objectName) {
      /*console.log("Testing Self with Self : " +
                               ob.objectName + " = " + other.objectName); */
      continue;}//NOT RETURN; per BitBender, return will END a loop instead of just running the next iteration..
    if(Math.abs(ob.position.x - other.position.x)< other.size) {
       console.log(ob.objectName + " collided with " +  
       other.objectName + " on the X axis at : " +
       ob.position.x.toFixed(2) + " = " +
       other.position.x.toFixed(2));   
    }
    if(Math.abs(ob.position.y - other.position.y)< other.size) {
       console.log(ob.objectName + " collided with " +  
       other.objectName + " on the y axis at : " +
       ob.position.x.toFixed(2) + " = " +
       other.position.x.toFixed(2));   
    }
    if((Math.abs(ob.position.x - other.position.x)> other.size) &&
      (Math.abs(ob.position.y - other.position.y)> other.size))
    {
      console.log("No collision");
    }
    console.log("TEST 1");
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

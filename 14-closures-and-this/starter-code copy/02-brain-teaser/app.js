/*
The queueCreator() function is supposted to help us order all of our guests upon 
arrival. However, if you run the code, you will see that every person in our queueList
is given the same position.
Fix queueCreator() so that each guest is given his/her correct position in the list.
(1, then 2, then 3)
*/

function queueCreator(waitList){
  var positionInQueue = 1;

  for (var i = 0; i < waitList.length; i++) {
    (function (position) {
      waitList[i].id = function() {
        return position;
      }
    })(positionInQueue);
    positionInQueue++;
  }

  return waitList;
}

var people = [{name:'Keanu'}, {name:'Patrick'}, {name: 'Gary'}];

var queueList = queueCreator(people);

console.log(queueList[0].id());
console.log(queueList[1].id());
console.log(queueList[2].id());

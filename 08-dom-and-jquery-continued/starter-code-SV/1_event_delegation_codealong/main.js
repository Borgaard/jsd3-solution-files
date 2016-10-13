function addToList($list, item) {
  var $itemLi = $('<li>').text(item);
  $list.append($itemLi);
  addCompleteLinks($itemLi);
}

//function addCompleteLinks($lis) {
//  $lis.each(function() {
/*    var $newLink = $('<span>');
    var $linkWithText = $newLink.html(' complete task');
    var $completedLink = $linkWithText.addClass('complete-task');
    var $completedLink = $('<span>').html(' complete task').addClass('complete-task');
    $(this).append($completedLink);
<<<<<<< HEAD:curriculum/lesson-plans/08-dom-and-jquery-continued/starter-code-SV/codealong/main.js
    $(this).append(<#li>).html('&there4')
  });
=======
  });*/

function addCompleteLinks($lis) {
//  $lis.each(function() {
/*    var $newLink = $('<span>');
    var $linkWithText = $newLink.html(' complete task');
    var $completedLink = $linkWithText.addClass('complete-task');*/
    var $completedLink = $('<span>').html(' complete task').addClass('complete-task');
    $lis.append($completedLink);
  //});
>>>>>>> b39fd036a9a98159a74e1d5b4b229b6dd5f696ce:curriculum/lesson-plans/08-dom-and-jquery-continued/starter-code-SV/1_event_delegation_codealong/main.js


    $('.complete-task').on('click', function(event) {
    // We don't need `event.preventDefault()` here
    // because there is no weird default action
    // when clicking on a `span` element.
    $(this).parent().addClass('completed');
  });
}

var $todoList = $('#todo-list');
var $button = $('#new-item-button');
var $newItemInput = $('#new-item');

// The following statement results in a collection
var $todoListItems = $('#todo-list .todo-item');
addCompleteLinks($todoListItems);

$button.on('click', function(event) {
  event.preventDefault();
  var newItem = $newItemInput.val();
  if (newItem === '') {
    alert('You must type in a value!');
  } else {
    addToList($todoList, newItem);
    $newItemInput.val('');
  }
});

var $todoList = $('#todo-list');

$todoList.on('mouseenter mouseleave', 'li', function(event) {
  if (event.type === 'mouseenter') {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  } else if (event.type === 'mouseleave') {
      $(this).siblings().removeClass('inactive');
  }
});

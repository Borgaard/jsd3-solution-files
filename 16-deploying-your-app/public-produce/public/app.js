// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiszFHYJFe5Hjf5VTXRbh7hxcPjuKWBE4",
    authDomain: "js3sf-demo-83bfa.firebaseapp.com",
    databaseURL: "https://js3sf-demo-83bfa.firebaseio.com",
    storageBucket: "js3sf-demo-83bfa.appspot.com",
    messagingSenderId: "1005302357519"
};
firebase.initializeApp(config);

var messageAppReference = firebase.database();

$(document).ready(function() {
    $('#message-form').submit(function(event) {
        event.preventDefault();
        var message = $('#message').val();
        $('#message').val('');
        var messagesReference = messageAppReference.ref('messages');
        messagesReference.push({
            message: message,
            votes: 0
        });
    });
    messageClass.getPosts();
});

var messageClass = (function() {
    function getPosts() {
        messageAppReference.ref('messages').on('value', function(results) {
            var $messageBoard = $('.message-board');
            var messages = [];
            var allMessages = results.val();
            for (var msg in allMessages) {
                var message = allMessages[msg].message;
                var votes = allMessages[msg].votes;
                var $messageListElement = $('<li>');
                var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');
                $deleteElement.on('click', function(e) {
                    var id = $(e.target.parentNode).data('id');
                    deleteMessage(id);
                })
                var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');
                $upVoteElement.on('click', function(e) {
                    var id = $(e.target.parentNode).data('id');
                    console.log(votes);
                    updateMessage(id, ++votes)
                })
                var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');
                $downVoteElement.on('click', function(e) {
                    var id = $(e.target.parentNode).data('id');
                    updateMessage(id, --votes)
                })
                $messageListElement.attr('data-id', msg);
                $messageListElement.html(message);
                $messageListElement.append($deleteElement);
                $messageListElement.append($upVoteElement);
                $messageListElement.append($downVoteElement);
                $messageListElement.append('<div class="pull-right">' + votes + '</div>');
                messages.push($messageListElement);
            }
            $messageBoard.empty();
            for (var i in messages) {
                $messageBoard.append(messages[i]);
            }

        });
    }
    function updateMessage(id, votes) {
        console.log(votes);
        var messageReference = messageAppReference.ref('messages').child(id);
        messageReference.update({
            votes: votes          
        })
    }
    function deleteMessage(id) {
        var messageReference = messageAppReference.ref('messages').child(id);
        messageReference.remove();        
    }

    return {
        getPosts: getPosts
    }
})();
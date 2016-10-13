/*var a = 1;

function foo() {
    console.log(a);
}

foo();*/

/*function bar() {
    var b = 'local value';
    console.log(b);
}

bar();*/

/*function printMessage() {
    var message = 'Hello, Johnny';
    setTimeout(function onSetTimeout() {
        console.log(message);
    }, 1000);
}

printMessage();*/

function createUser() {
    var userId = 999;

    return {
        getUserId: function() {
            return userId;
        },
        setUserId: function(newId) {
            userId = newId;
        }
    }
}
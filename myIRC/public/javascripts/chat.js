$(function() {
    let socket = io();
    $('form').submit(function () {
        socket.emit('vberfixbvjhdk', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('vberfixbvjhdk', function (msg) {
        $('#messages').append($('<li>').text(msg));
        window.scrollTo(0, document.body.scrollHeight);
    });
});
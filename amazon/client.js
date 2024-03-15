$(function () {
    const socket = io();
  
    // Handle form submission
    $('form').submit(function() {
      const message = $('#m').val();
      if (message.trim() !== '') {
        socket.emit('chat message', message);
        $('#m').val('');
      }
      return false;
    });
  
    // Receive and display messages
    socket.on('chat message', function(message){
      $('#messages').append($('<li>').text(message));
    });
  });
  
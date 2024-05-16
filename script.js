document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('trello-board');
    board.addEventListener('click', function() {
        alert('This is my static Trello board!')
    });
});
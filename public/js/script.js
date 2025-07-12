document.addEventListener('DOMContentLoaded', function () {
    var learningGoals = document.getElementById('learning-goals');
    new Sortable(learningGoals, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });

    var capstoneProject = document.getElementById('capstone-project');
    new Sortable(capstoneProject, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });

    var lists = document.querySelectorAll('.list-group');
    lists.forEach(function (list) {
        new Sortable(list, {
            group: 'shared',
            animation: 150
        });
    });
});

$(function() {

    $('newTaskForm').hide();

    var listo = [];

    var Task = function(task) {
        this.task = task;
        this.id = 'new';
    };

    var addTask = function(task) {
        if(task) {
            task = new Task(task);
            listo.push(task);

            $('#newItemInput').val('');
            $('#newList').append('<ahref="#" class="" id="item"<li class="list-group-item">' + task.task +'<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');
        }

        $('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');

    };

    $('#saveNewItem').click(function(e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });

    $('#newListItem').click(function() {
        $('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
    });

    $('#cancel').click(function(e) {
        e.preventDefault();
        $('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
    });

    $(document).click('#item', function(e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
        $('#currentList').append(this.outerHTML);
        localStorage.setItem('task', 'id');
    });

    $(document).click('#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        task.id = "archived";
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        advanceTask(task);
        $('#archivedList').append(changeIcon);
    });

    $(document).click('#archived', function(e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
    });




});

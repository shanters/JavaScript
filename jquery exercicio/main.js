$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaNovaTarefa = $('#nome-tarefa-nova').val();
        const novaTarefa = $('<li></li>');
        $(`<div class="lista">${nomeDaNovaTarefa}</div>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa-nova').val('');
        $('.lista').click(function() {
            $(this).css('text-decoration', 'line-through');
        })
    })
})
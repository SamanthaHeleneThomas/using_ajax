


var currentGame ={}

var showFrom =false

$(document).ready(function(){

$('.game-item').on('click',function(){
    currentGame.id = this.dataset.id
    currentGame.name = this.dataset.name
    $.ajax({
        url: '/games/'+ currentGame.id + '/characters/',
        method:
        'GET',
        dataType: 'JSON'

    })
    .done(function(characters){
        $('#game').text('Characters in '+ CurrentGame.name,
        var list =$('#characters')
        list.empty()
        characters.forEach( function(char){
            var li= '<li data-character-id="' + char.id + '">' + char.name + '-' +
                char.power + '</li>'
            list.append(li)

        })
    })

})

$('#toggle').on('click', function(){
    showForm = showForm
    $('game-form').remove()
    $('#games-list'.toggle()

    if(showForm){

        $.ajax({
            url: '/game_form',
            method: 'GET'

        })
        .done(function(){
            $('#toggle').after(html)
        })
    }
})

$(document).on('submit', '#game-form form', function(e){
    e.preventDefault()
    var data = $(this).serializeArray()
    $.ajax({
        url: '/games',
        type: 'POST',
        dataType: 'JSON',
        data: data
    }).done( function(game){
        
    })
})


})
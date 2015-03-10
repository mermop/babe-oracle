$( document ).ready(function() {
    var fortunes = ["You're fierce. Own your fierceness.", "You look like a goddess right now.", "You don't need permission to be a badass.", "Love yourself and love your gurlz.", "Your hair is amazing."]

    $('#get').click(function() {
      $('#oracle').text(fortunes[Math.floor(Math.random() * fortunes.length)]);
    });
});

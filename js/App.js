var scrollToElement = function (el, ms) {
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

function about() {
    scrollToElement('#about', 600);
}

function works() {
    scrollToElement('#works', 600);
}

function contact() {
    scrollToElement('#contact', 600);
}

function copyClipboard() {
    var email = "extibax@gmail.com";
    navigator.clipboard.writeText(email);
    alertify.success('¡The email has been copied!');
}

$(document).ready(function () {

    $.get('https://api.github.com/users/Extibax', 'aplication/json', function (response) {
        let extibax = {
            name: response.name,
            bio: response.bio
        }

        let kn_list = extibax.bio.split(':', 2), kn_clear = kn_list[1].split('\r\n'),
            knowledges = kn_clear[1].split(','), template = '';

        knowledges.forEach(function (knowledge) {
            template += `<span>${$.trim(knowledge)}</span><br>`;
        });

        $('#knowledge_list').html(template);
    })
});
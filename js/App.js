$(document).ready(function () {
    var scrollToElement = function (el, ms) {
        var speed = (ms) ? ms : 600;
        $('html,body').animate({
            scrollTop: $(el).offset().top
        }, speed);
    }

    function aboutMe() {
        /* window.location.hash = '#aboutMe'; */
        /* document.getElementById('aboutMe').scrollIntoView(); */
        scrollToElement('#aboutMe', 600);
    }

    function works() {
        /* window.location.hash = '#works';
        document.getElementById('works').scrollIntoView(); */
        scrollToElement('#works', 600);
    }

    function contact() {
        /* window.location.hash = '#contact';
        document.getElementById('contact').scrollIntoView(); */
        scrollToElement('#contact', 600);
    }

    function copyClipboard() {
        var email = "extibax@gmail.com";
        navigator.clipboard.writeText(email);
        alertify.success('¡The email has been copied!');
    }

    $.get('https://api.github.com/users/Extibax', 'aplication/json', function (response) {
        let extibax = {
            name: response.name,
            bio: response.bio
        }

        let kn_list = extibax.bio.split(':', 2), kn_clear = kn_list[1].split('\r\n'), 
        knowledges = kn_clear[1].split(','), template = '';

        knowledges.forEach(function (knowledge) {
            template +=`<span>${$.trim(knowledge)}</span><br>`;
        });

        $('#knowledge_list').html(template);
    })
});
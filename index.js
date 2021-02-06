document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));





//Typed js typing effect
$('document').ready(function(){
    var typed = new Typed('#typed',{
        strings: ["Hi,^1000I'm Wassim Harakeh"],
        typeSpeed: 40
    });
});




// Jquery smooth scroll
$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
        },
        800
        );
    }
});



//Anime js






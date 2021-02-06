var box = document.querySelector(".main-menu");

document.querySelector('.menu-btn').addEventListener('click', () => {
    box.classList.toggle('show');

    // if (event.target != box && event.target.parentNode != box) {
    //     box.style.display = "none";
    // }
});

// window.addEventListener('mouseup', function(event) {
//     const box = document.querySelector(".main-menu");
//     if (event.target != box && event.target.parentNode != box) {
//         box.style.display = "none";
//     } else {
//         box.classList.toggle('show');
//     }
// });






//Typed js typing effect
$('document').ready(function(){
    var typed = new Typed('#typed',{
        strings: ["Hi,^1000I'm Wassim Harakeh", "I'm A junior Web Developer"],
        typeSpeed: 80,
        loop: true
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






// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};

// scroll animation related elements
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

sectionToNavbar = {"landing":"navbar-landing","about":"navbar-about","projects":"navbar-projects","system":"navbar-system","contact":"navbar-contact"};

// var navbarIds = ["navbar-landing","navbar-about","navbar-projects","navbar-system","navbar-contact"];
var sectionIds = ["#landing","#about","#projects","#system","#contact"];
var sections = document.querySelectorAll(sectionIds);

function loop() {
    // animate
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    // navbar
    sections.forEach(function (element){
        if (isElementInViewport(element)){
            // alert(sectionToNavbar[element.id]);
            // alert(document.getElementById(sectionToNavbar[element.id]));
            document.getElementById(sectionToNavbar[element.id]).classList.add('active');
        }else{
            document.getElementById(sectionToNavbar[element.id]).classList.remove('active');

        }
    })

    scroll(loop);
}

// initial call for loop
loop();


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0 && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        )
    );
}
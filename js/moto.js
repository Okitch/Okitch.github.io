/*$(document).ready(function () {

    let mesImages = $(".imag");
    //console.log(mesImages);
    function carrousel(){
        for(i=0; i<mesImages.length; i++){
            if($(mesImages[i]) == $(mesImages[i]).css("opacity","1")){

            }else{
                $(mesImages[i]).css("opacity","0");
                $(mesImages[i+1]).css("opacity","1")
                $(mesImages[i]).css("transition","all 10s");
            }
        }
    }
$(".bouton").on("click", carrousel());
});
*/
//e.preventDefault();

//console.log(mesImages);
/*function carrous(){
    for(i=0; i<mesImages.length; i++){
        if (mesImages[i].style.opacity == 1){

        }else{
            mesImages[i].style.opacity == 0;
            mesImages[i+1].style.opacity == 1;
        }
    }
}
*/
//CAROUSSEL
let mesImages = document.querySelectorAll('.imag');
//console.log(mesImages);


function carrous() {
    if (mesImages[0].style.opacity == 1) {
        mesImages[0].style.opacity = 0;
        mesImages[0].style.transition = "all 4s";
        mesImages[1].style.opacity = 1;
        mesImages[1].style.transition = "all 4s";


    } else if (mesImages[1].style.opacity == 1) {
        mesImages[1].style.opacity = 0;
        mesImages[1].style.transition = "all 4s";
        mesImages[2].style.opacity = 1;
        mesImages[2].style.transition = "all 4s";

    } else if (mesImages[2].style.opacity == 1) {
        mesImages[2].style.opacity = 0;
        mesImages[2].style.transition = "all 4s";
        mesImages[3].style.opacity = 1;
        mesImages[3].style.transition = "all 4s";

    } else if (mesImages[3].style.opacity == 1) {
        mesImages[3].style.opacity = 0;
        mesImages[3].style.transition = "all 4s";
        mesImages[0].style.opacity = 1;
        mesImages[0].style.transition = "all 4s";

    }
}
document.querySelector('.bouton').addEventListener('click', carrous);
//Click Animation

window.addEventListener('click', function (e) {
    const rond = this.document.createElement('div');
    rond.className = 'click';
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(rond);
    setTimeout(function () {
        rond.remove();
    }, 1500);

});


//Affichage au scroll bloc 2

const slideBloc2 = document.querySelector('.bloc2');
const Bloc3 = document.querySelector('.bloc3'); // Pour l'animation jouer sur l'opacité;
//console.log(slideBloc2);
window.addEventListener('scroll', function () {
    const { scrollTop, clientHeight } = document.documentElement;
    const TopElementToTopViewport = slideBloc2.getBoundingClientRect().top;
    //console.log(TopElementToTopViewport);
    //const TopElementToTopViewport2 = slideBloc3.getBoundingClientRect().top;

    /**if(scrollTop > (scrollTop + TopElementToTopViewport) || scrollTop > (scrollTop + TopElementToTopViewport2).toFixed()- clientHeight * 2){
         slideBloc2.classList.add('active');
         slideBloc3.classList.add('active');
    }
 */
    if (scrollTop > (scrollTop + TopElementToTopViewport).toFixed() - clientHeight * 0.9) {
        slideBloc2.classList.add('active');
    } /*else if(scrollTop > (scrollTop + TopElementToTopViewport2).toFixed() - clientHeight * 0.9){
    slideBloc3.classList.add('active');
}*/
});


//Affichage au scroll header Bloc 2/Bloc3
const ratio = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('revealVisible')
            //console.log('visible')
            observer.unobserve(entry.target)
        }/*else{ Pour tester intersectionObserver
            //console.log('invisible')
        }*/
        //console.log(entry.intersectionRatio)
    });
    //console.log('handleIntersect')
}
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r);
});
//Pour un seul element observer.observe(document.querySelector('.reveal'))







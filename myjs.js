function showmenu(){
    console.log('hiiii');
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('menubtn_i').classList.toggle('active');
}

(function(){
    window.onscroll= function(){
        
        var ele=document.getElementById('navbar');
        
        if(document.documentElement.scrollTop>20){
        ele.classList.add('sticky');
        }
        else{
            ele.classList.remove('sticky');
        }
        
        var ele2=document.getElementById('scrollbtn');
        if(document.documentElement.scrollTop>500){
            ele2.classList.add('show');
        }
        else{
            ele2.classList.remove('show');
        }
        var ele3=document.getElementById('contact-content');
        if(document.documentElement.scrollTop>2250){
            ele3.classList.add('show');
        // console.log(document.documentElement.scrollTop);
        }
    };
   /* $('.menubtn').click(function(){
        console.log('hiiii');
        $('.navbar .menu').toggleClass("active");
        $('.menubtn i').toggleClass("active");});*/
    var ele5=document.getElementsByClassName('menubtn');
    ele5[5].onclick=function(){showmenu()};
    ele5[4].onclick=function(){showmenu()};
    ele5[3].onclick=function(){showmenu()};
    ele5[2].onclick=function(){showmenu()};
    ele5[1].onclick=function(){showmenu()};
    ele5[0].onclick=function(){showmenu()};


    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
})();

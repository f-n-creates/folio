/*

titles
https://jsfiddle.net/mohamedyousef1980/4up5a43d/5/

*/

//titles
$(function() {
    $(window).scroll(function(){
        if(SectionChange($('#con')) === true){
         $('.title').text('Concept');
        }else if(SectionChange($('#how')) === true){
        $('.title').text('How It Works');
        }else if(SectionChange($('#im')) === true){
         $('.title').text('Outcome & Impact');
        } else if(SectionChange($('#aes')) === true){
         $('.title').text('Approach');
        }
    });
});

$(function() {
    $(window).scroll(function(){
        if(SectionChange($('#c')) === true){
         $('.tit').text('Concept');
        }else if(SectionChange($('#h')) === true){
        $('.tit').text('How It Works');
        }else if(SectionChange($('#i')) === true){
         $('.tit').text('Outcome & Impact');
        } else if(SectionChange($('#a')) === true){
         $('.tit').text('Approach');
        }
    });
});


function SectionChange(section_id){
    return ($(window).scrollTop() > ($(section_id).offset().top - 150) && $(window).scrollTop() < $(section_id).offset().top + ($(section_id).outerHeight(true) - 150)) ? true : false;
} 
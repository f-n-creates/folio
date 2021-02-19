//titles
$(function() {
    $(window).scroll(function(){
        if(SectionChange($('#con')) === true){
         $('.title').text('Concept');
        }else if(SectionChange($('#syn')) === true){
        $('.title').text('Synopsis');
        }else if(SectionChange($('#out')) === true){
         $('.title').text('Approach & Outcome');
        } else{}
    });
});

$(function() {
    $(window).scroll(function(){
        if(SectionChange($('#c')) === true){
         $('.tit').text('Concept');
        }else if(SectionChange($('#s')) === true){
        $('.tit').text('Synopsis');
        }else if(SectionChange($('#o')) === true){
         $('.tit').text('Outcome');
        } else{}
    });
});

function SectionChange(section_id){
    return ($(window).scrollTop() > ($(section_id).offset().top - 150) && $(window).scrollTop() < $(section_id).offset().top + ($(section_id).outerHeight(true) - 150)) ? true : false;
} 
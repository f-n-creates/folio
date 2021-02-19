//titles
$(function() {
    $(window).scroll(function(){
        if(SectionChange($('#con')) === true){
         $('.title').text('Concept');
        }else if(SectionChange($('#out')) === true){
        $('.title').text('How It Works & Outcome');
        }else if(SectionChange($('#aes')) === true){
         $('.title').text('Approach');
        } else{}
    });
});

$(function() {
    $(window).scroll(function(){
        if(SectionChange($('#c')) === true){
         $('.tit').text('Concept');
        }else if(SectionChange($('#o')) === true){
        $('.tit').text('Outcome');
        }else if(SectionChange($('#a')) === true){
         $('.tit').text('Approach');
        } else{}
    });
});

function SectionChange(section_id){
    return ($(window).scrollTop() > ($(section_id).offset().top - 150) && $(window).scrollTop() < $(section_id).offset().top + ($(section_id).outerHeight(true) - 150)) ? true : false;
} 
//scroll doesn't work in portrait view

if (document.documentElement.clientWidth >= 767){
var adjustment = 50;
}else{
adjustment = 200;
};

var home = $('#firststop').offset().top - adjustment;
var about = $('#secondstop').offset().top - adjustment;
var contact = $('#thirdstop').offset().top - adjustment;

console.log(home);

$('#home').click(function(){
            $('html,body').animate({
            	scrollTop:home,
            },'slow');
            return false;
        });

$('#about').click(function(){
            $('html,body').animate({scrollTop:about},'slow');
            return false;
        });
$('#contact').click(function(){
            $('html,body').animate({scrollTop:contact},'slow');
            return false;
        });

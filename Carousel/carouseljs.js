var home = $('#firststop').offset().top - 50;
var about = $('#secondstop').offset().top - 50;
var contact = $('#thirdstop').offset().top - 50;

$('#home').click(function(){
            $('html,body').animate({scrollTop:home},'slow');
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

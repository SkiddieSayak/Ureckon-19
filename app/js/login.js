
$('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button.email').click(
    function(){
      console.log("Something");
      $('.email-section').addClass("fold-up");
      $('.password-section').removeClass("folded");
    }
  );

$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
        $('.icon-lock').addClass("next");
      } else {
        $('.icon-lock').removeClass("next");
      }
  }
);

$('.next-button.password').click(
    function(){
      console.log("Something");
      $('.password-section').addClass("fold-up");
      $('.success').css("marginTop", 0);
    }
  );


$('.animated-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

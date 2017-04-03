var cookies = 0;

$( document ).ready(function() {
  var ifStarted = false;

  if(!ifStarted)
  {
    $("#start").css('display', 'block');
    $("#cookie").css('display', 'none');
  }
});

function start()
{
  ifStarted = true;
  if(ifStarted){
    $("#cookie").css('display', 'block');
    $("#start").css('display', 'none');
  }

}

function cookieClick()
{
  cookies++;
  $('.cookies').html("Your cookies: " + cookies);
}

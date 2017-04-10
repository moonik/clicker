var cookies = 0;

var factoryPrice= 700;
var factoryCookies = 10;
var amountFactories = 0;

var grandmaPrice = 500;
var grandmaCookies = 2;
var amountGrandma = 0;

var ifGrandma = false;
var ifFactory = false;

$( document ).ready(function() {
  var ifStarted = false;

  if(!ifStarted)
  {
    $("#start").css('display', 'block');
    $("#cookie").css('display', 'none');
    $("#shop").css('display', 'none');
  }
});

function start()
{
  ifStarted = true;
  if(ifStarted){
    $("#cookie").css('display', 'block');
    $("#shop").css('display', 'block');
    $("#start").css('display', 'none');
  }
};

function cookieClick()
{
  cookies++;
  $('.cookies').html("Your cookies: " + cookies);
};

function buyFactory(){
  if(cookies >= factoryPrice){
    amountFactories++;
    cookies -= factoryPrice;
    if(!ifFactory){
        factoriesCookies();
    }
  }else {
    console.log("You don't have enought cookies");
  }
};

function buyGrandma(){
  if(cookies >= grandmaPrice){
    amountGrandma++;
    cookies -= grandmaPrice;
    if(!ifGrandma){
        grandmaCookie();
    }
  }else {
    console.log("You don't have enought cookies");
  }
};

function factoriesCookies(){
  ifFactory = true;
  setInterval(function(){
      cookies += factoryCookies*amountFactories;
    $('.cookies').html("Your cookies: " + cookies);
  }, 1000);
};

function grandmaCookie(){
  ifGrandma = true;
  setInterval(function(){
      cookies += grandmaCookies*amountGrandma;
    $('.cookies').html("Your cookies: " + cookies);
  }, 1000);
};

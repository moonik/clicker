var cookies = 0;
var box;
var t;
var ifInterval = false;
var ifFinterval = false;
var ifGinterval = false;
var posF = 0;
var posG = 0;

var factoryPrice= 1;
var factoryCookies = 10;
var amountFactories = 0;

var grandmaPrice = 100;
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
    $("#cook").css('display', 'none');
    $("#cookF").css('display', 'none');
    $("#cookG").css('display', 'none');
  }
});

function start()
{
  ifStarted = true;
  if(ifStarted){
    box = document.getElementById("cook");
    $("#cookie").css('display', 'block');
    $("#shop").css('display', 'block');
    $("#start").css('display', 'none');
  }
};

function cookieClick()
{
  if(!ifInterval){
    var t = setInterval(move, 1);
  }else{
    clearInterval(t);
    pos = 0;
  }
  cookies++;
  $('.cookies').html("Your cookies: " + cookies);
};

// starting position
var pos = 0;

function move() {
  ifInterval = true;
  if(pos == 300){
    clearInterval(t);
    $("#cook").css('display', 'none');
  }else{
    $("#cook").css('display', 'block');
    pos += 1;
    box.style.top = -pos+"px";
  }
}

function buyFactory(){
  if(cookies >= factoryPrice){
    $("#cookF").css('display', 'block');
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
    $("#cookG").css('display', 'block');
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

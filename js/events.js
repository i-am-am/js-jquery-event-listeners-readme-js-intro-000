//define functions here

function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $(document).on('keydown', function(){
    if(key.which == 70){
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  });
}


$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});

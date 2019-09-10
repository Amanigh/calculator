function insrt(num) {
  $(".calc-display").val($(".calc-display").val() + num);
}

function c() {
    $(".calc-display").val("");
}

function del(){
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring( 0 , value.length - 1));
}

function eq() {
  $(".calc-display").val(eval($(".calc-display").val()));
}

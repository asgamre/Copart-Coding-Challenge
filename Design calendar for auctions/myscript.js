var num = 1;
var className = " ";
var jsonData = " ";

function parseJSON() {
  $("#divMessage").css("display", "block");
  $('.placeHolder').html("");
  num = 1;
  jsonData = $.trim($("#txtData").val());
  $.getJSON(jsonData, function (data) {
    $.each(data, function (key, val) {
      getJson(val);
    });
    $("#divMessage").css("display", "none");
  });
}

function getJson(JData) {
  $.each(JData, function (Jkey, Jval) {
    if (Jval && typeof Jval == "object") {
      getJson(Jval);
    } else {
      className = (num % 2 == 0) ? "even" : "odd";
      if (num == 1) {
        $('.placeHolder').append("<tr><th>Key</th><th>Value</td></th>");
      }
      $('.placeHolder').append("<tr><td>" + Jkey + "</td><td>" + Jval["data"]["saleList"]["facility"] + "</td><td>" + Jval["data"]["saleList"]["facility"] + "</td></tr>");
      num = num + 1;
    }
  });
}

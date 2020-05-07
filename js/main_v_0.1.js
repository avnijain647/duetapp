function showMailingPopUp() {
  //show modal
  $("#sign-up-modal").modal("show");
}

$("document").ready(function () {
  $("#signup").click(function (e) {
    e.preventDefault();
    showMailingPopUp();
  });
  $("#sign-up-2").click(function (e) {
    e.preventDefault();
    showMailingPopUp();
  });
  //nav
  $(".quoteblock1 div").on("click", function () {
    var filter = $(this).attr("data-filter");
    $(".quotes").removeClass("show");
    $(filter).addClass("show");
    $(".quote1").removeClass("scale");
    $(this).addClass("scale");
  });
});

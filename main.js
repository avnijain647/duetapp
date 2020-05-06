let active = false;
let formCounter = 0;

function showMailingPopUp() {
  //check if there is a popup window already
  if (document.getElementById(`PopupSignupForm_${formCounter}`) == null) {
    formCounter++;
    require(["mojo/signup-forms/Loader"], function (L) {
      L.start({
        baseUrl: "mc.us10.list-manage.com",
        uuid: "bafd5f830e94b803ee41b5f99",
        lid: "825e79420f",
      });
      active = false;
    });
    document.cookie =
      "MCPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie =
      "MCPopupSubscribed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }
}

window.onload = (e) => {
  document.getElementById("signup").onclick = function (e) {
    if (!active) {
      active = true;
      e.preventDefault();
      showMailingPopUp();
      setTimeout(function () {
        active = false;
      }, 1000);
    }
  };
  document.getElementById("sign-up-2").onclick = function (e) {
    if (!active) {
      active = true;
      e.preventDefault();
      showMailingPopUp();
      setTimeout(function () {
        active = false;
      }, 1000);
    }
  };
};

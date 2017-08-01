
// Menu toggle
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// Popup
const mainForm = document.querySelector(".main-form form");

if (mainForm !== null) {
  const fields = mainForm.querySelectorAll("input");
  const telErrorMsg = mainForm.querySelector(".check-tel-message");
  const popup = mainForm.querySelectorAll(".feedback-popup")
  const successPopup = mainForm.querySelector(".feedback-popup--success");
  const errorPopup = mainForm.querySelector(".feedback-popup--error")
  const popupCloseBtn = mainForm.querySelectorAll(".feedback-popup__close");

  mainForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let fakeCounter = 0;
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].value === "") {
        fakeCounter++;
        fields[i].style.border = "1px solid red";
        telErrorMsg.style.display = "inline-block";
      } else {
        fields[i].style.border = "none";
      }
    };

    if (fakeCounter > 0) {
      errorPopup.style.display = "block";
    } else {
      successPopup.style.display = "block";
      telErrorMsg.style.display = "none";
    }
  });

  for (i = 0; i < popupCloseBtn.length; i++) {
    popupCloseBtn[i].addEventListener("click", function() {
      for (i = 0; i < popup.length; i++) {
        popup[i].style.display = "none";
      }
    })
  }
}

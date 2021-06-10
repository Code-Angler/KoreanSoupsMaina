// //---테스트 url버전
// function changeToLogin() {
//   window.location.href = "../templates/login.html";
// }

// function changeToMain() {
//   window.location.href = "../templates/index.html";
// }

// function changeToReview() {
//   window.location.href = "../templates/review.html";
// }

// ---서버 url버전
function changeToLogin() {
  window.location.href = "/login";
}

function changeToMain() {
  window.location.href = "/";
}

let selectedHide = true;

function showSelectList() {
  let selectedDownMenu = document.querySelector(
    ".count-selected-menu-downlist"
  );
  let selectedUpMenu = document.querySelector(".count-selected-menu");

  if (selectedHide == true) {
    selectedDownMenu.style.visibility = "visible";
    selectedUpMenu.style.border = "1px solid #346aff";
    selectedHide = false;
  } else {
    selectedDownMenu.style.visibility = "hidden";
    selectedUpMenu.style.border = "1px solid #dddddd";
    selectedHide = true;
  }
}

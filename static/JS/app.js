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
  localStorage.setItem("지역명", "seoul");
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

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function loginout() {
  var yum = getCookie("mytoken");
  if (yum) {
    const logbt = document.querySelector(".login");
    logbt.addEventListener("click", () => {
      document.cookie = "mytoken=; expires=Mon, 01 Jan 1970 00:00:00 UTC;";
      localStorage.setItem("src", "../static/image/login.svg");
      alert("로그아웃 완료하였습니다!");
      window.location.href = "/";
    });
  } else {
    window.location.href = "/login";
    alert("로그인 페이지로 이동합니다.");
  }
}

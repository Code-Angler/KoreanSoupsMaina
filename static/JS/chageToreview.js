let mian = 0;

function changeReview() {
  $.ajax({
    type: "GET",
    url: "/reviewContents",
    data: {},
    success: function (response) {
      const indexinLocal = localStorage.getItem("index");
      console.log(indexinLocal);
      let place = localStorage.getItem("지역명");
      const store = response[place];

      // $(".review-detail-box").empty();

      let address = store[indexinLocal]["address"];
      let title = store[indexinLocal]["title"];
      let runTime = store[indexinLocal]["runTime"];
      let phone = store[indexinLocal]["phone"];
      let link_url = store[indexinLocal]["link_url"];
      let img_url = store[indexinLocal]["img_url"];
      backgroundImage = document.querySelector(
        ".review-map"
      ).style.backgroundImage = `url("${img_url}")`;
      document.querySelector(".title-review").textContent = title;
      document.querySelector(".address-review").textContent = address;
      document.querySelector(".phone-review").textContent = phone;
      document.querySelector(".link-review").textContent = link_url;
      document.querySelector(".runtime-review").textContent = runTime;
      document.querySelector(".link-review").href = link_url;
    },
  });
}

function changeToReview(index) {
  window.location.href = "/review";
  localStorage.setItem("index", index);
}

function checkRevieOrLogin() {
  const pageName = document.querySelector(".page-name")?.textContent;
  console.log(pageName);
  if (pageName == "Review") {
    changeReview();
  }
}

function changeLoginIcon() {
  document.querySelector(".login-icon").src = localStorage.getItem("src");
}

// function onloadChecklogin() {
//   var yum = getCookie("mytoken");
//   if (yum) {
//       localStorage.setItem("src", "../static/image/login.svg");
//     };
// }


// window.onload = onloadChecklogin();

window.onload = checkRevieOrLogin();
window.onload = changeLoginIcon();

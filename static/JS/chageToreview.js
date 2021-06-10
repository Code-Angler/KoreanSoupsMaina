let menuIndex = 0;

function sol() {
  $.ajax({
    type: "GET",
    url: "/reviewContents",
    data: {},
    success: function (response) {
      // let articles = response["all_articles"];
      console.log(response["stores"][0]);
    },
  });
}

function changeToReview(index) {
  window.location.href = "/review";
  menuIndex = index;
  console.log(index);
}

function changeReviewContents(index) {
  const reviewAddress = document.querySelector(".address-review");
  const reviewPhone = document.querySelector(".phone-review");
  const reviewTitle = document.querySelector(".title-review");
  const reviewRuntime = document.querySelector(".runtime-review");
  const reviewLink = document.querySelector(".link-review");

  console.log(reviewAddress.textContent);

  reviewAddress.textContent = `{{stores[${index}].address}}`;
  // reviewPhone.textContent = `{{stores[${index}].phone}}`;
  // reviewLink.textContent = `{{stores[${index}].link_url}}`;
  // reviewRuntime.textContent = `{{stores[${index}].runTime}}`;
  // reviewTitle.textContent = `{{stores[${index}].title}}`;
  console.log(reviewAddress.textContent);
  console.log("지금 이것도 작동중이야");
}

function checkRevieOrLogin() {
  const pageName = document.querySelector(".page-name")?.textContent;
  console.log(pageName);
  if (pageName == "Review") changeReviewContents(menuIndex);
}
window.onload = checkRevieOrLogin();

// document.querySelector(".view-more")?.addEventListener("click", () => {
//   menuIndex = document.querySelector(".view-more").getAttribute("id");
//   console.log(menuIndex);
//   // window.location.href = "/review";
//   console.log("눌렸다!");
// });

function getIndex() {
  let index = document.querySelectorAll(".view-more").getAttribute("id");
  console.log(index);
}

// function getIndexAndKey() {
//   let index = $("view-more").attr("id");
//   let key = $("#post-comment").val();

//   $.ajax({
//     type: "POST",
//     url: "/memo",
//     data: { url_give: url, comment_give: comment },
//     success: function (response) {
//       // 성공하면
//       alert(response["msg"]);
//       window.location.reload();
//     },
//   });
// }

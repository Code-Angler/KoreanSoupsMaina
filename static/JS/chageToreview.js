let mian = 0;

function sol() {
  $.ajax({
    type: "GET",
    url: "/reviewContents",
    data: {},
    success: function (response) {
      // let articles = response["all_articles"];
      const indexinLocal = localStorage.getItem("index");
      console.log(indexinLocal);
      console.log(response["stores"][indexinLocal]);
    },
  });
}

// document.querySelector(".view-more").addEventListener('click',()=>{

// }
// )
function getIndex(index) {
  mian = index;
  localStorage.setItem("index", index);
}

function changeToReview() {
  window.location.href = "/review";
}

function checkRevieOrLogin() {
  const pageName = document.querySelector(".page-name")?.textContent;
  console.log(pageName);
  if (pageName == "Review") changeReviewContents(menuIndex);
}
window.onload = checkRevieOrLogin();

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

// document.querySelector(".view-more")?.addEventListener("click", () => {
//   menuIndex = document.querySelector(".view-more").getAttribute("id");
//   console.log(menuIndex);
//   // window.location.href = "/review";
//   console.log("눌렸다!");
// });

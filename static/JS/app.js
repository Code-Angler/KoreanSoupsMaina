function changeToLogin() {
  window.location.href = "/login";
}

function changeToMain() {
  window.location.href = "/";
}

function changeToReview() {
  window.location.href = "/review";
}

function viewSoupList() {
  $("div.main-list").empty();
  let n = 0;

  for (let i = 0; i < 12; i++) {
    let soupImgHtml = `<div class="list">
  <div class="soup-img-box"><img src="../static/image/soup2.jpeg" class="soup-img"></div>
  <div class="soup-desc-box">
  <div class="soup-title"> <div class="title-stick"></div>
  ${i}</div>
  <div class="soup-title-desc">경상남도 창원시 마산회원구 내서읍 호계리 292-8</div>
  <div class="view-more" onclick="changeToReview()"><span class="view-more-box">View more</span></div>
</div>
</div> `;
    $("div.main-list").append(soupImgHtml);
    console.log("div를 생성합니다. ");
  }
}

window.onload = viewSoupList();

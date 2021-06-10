$(document).ready(function () {
  $("#reviews-box").html("");
  showReview();
});

function makeReview() {
  // 화면에 입력돼 있는 제목, 리뷰 내용을 가져옵니다.
  let title = $("#title").val();
  let review = $("#soupReview").val();
  // POST /review에 저장(Create)을 요청한다.
  $.ajax({
    type: "POST",
    url: "/review",
    data: { title_give: title, review_give: review },
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
    },
  });
}

function showReview() {
  $.ajax({
    type: "GET",
    url: "/review",
    data: {},
    success: function (response) {
      let reviews = response["all_reviews"];
      for (let i = 0; i < reviews.length; i++) {
        let title = reviews[i]["title"];
        let review = reviews[i]["review"];

        let temp_html = `<tr>
                                   <td>${title}</td>
                                   <td>${review}</td>
                                   <td><button onclick="deleteReview( '${title}', '${review}')">삭제</button></td>
                               </tr>`;
        $("#reviews-box").append(temp_html);
      }
    },
  });
}

function deleteReview(title, review) {
  $.ajax({
    type: "POST",
    url: "/deleteReview",
    data: { title_give: title, review_give: review },
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
      console.log();
    },
  });
}

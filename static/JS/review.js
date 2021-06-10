// $(document).ready(function () {
//     showReview();
// });

function makeReview() {
  // 화면에 입력돼 있는 제목, 리뷰 내용을 가져옵니다.
  let title = $("#title").val();
  let review = $("#soupReview").val();
  // POST /review에 저장(Create)을 요청한다.
  $.ajax({
    type: "POST",
    url: "/reviews",
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
    url: "/reviews",
    data: {},
    success: function (response) {
      let reviews = response["all_reviews"];
      console.log(reviews);
      for (let i = 0; i < reviews.length; i++) {
        let title = reviews[i]["title"];
        let review = reviews[i]["review"];
        console.log(review);
        let temp_html = `<div class="written-review-box">
                <div class="review-logo"><img src="../static/image/reviewlogo.png" alt=""></div>
                <div class="review-desc">
                    <div class="review-written-title">Title: ${title}</div>
                </div>
                <div class="review-written-content">${review}</div>
                <td><button onclick="deleteReview( '${title}', '${review}')">X</button></td>
            </div>`;
        $("#reviews-box").append(temp_html);
      }
    },
  });
}

function deleteReview(title, review) {
    $.ajax({
        type: 'POST',
        url: '/deleteReview',
        data: {title_give: title, review_give: review},
        success: function (response) {
            alert(response['msg']);
            window.location.reload()
            console.log()
        }
    });
}

window.onload = showReview();

function createMainPage() {
  $.ajax({
    type: "GET",
    url: "/reviewContents",
    data: {},
    success: function (response) {
      // let articles = response["all_articles"];
      // const indexinLocal = localStorage.getItem("index");
      //   console.log(indexinLocal);
      console.log(response["seouls"]);
      const store = response["seouls"];
      $(".main-list").empty();
      for (let i = 0; i < store.length; i++) {
        let address = store[i]["address"];
        let title = store[i]["title"];
        let imgUrl = store[i]["img_url"];

        let mainHtml = `
      <div class="list">
          <div class="soup-img-box"><img src="${imgUrl}" class="soup-img"></div>
          <div class="soup-desc-box">
              <div class="soup-title">
                  <div class="title-stick"></div>
                  ${title}
              </div>
              <div class="soup-title-desc" id="address">${address}</div>
              <div class="view-more" onclick="changeToReview()"><span class="view-more-box">View more</span>
              </div>
          </div>
      </div>`;
        $(".main-list").append(mainHtml);
      }
    },
  });
}

window.onload = createMainPage();

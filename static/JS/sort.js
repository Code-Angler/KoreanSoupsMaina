$(".categoryList").click(function () {
  let listID = $(this).attr("id");
  localStorage.setItem("지역명", listID);
  let place = localStorage.getItem("지역명");
  console.log(place);
  createMainPage();
});

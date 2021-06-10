$(".categoryList").click(function () {
  let listID = $(this).attr("id");
  localStorage.setItem("지역명", listID);
  let place = localStorage.getItem("지역명");
  console.log(place);
  //   let categoryTitle = document.querySelector(".count-selected-menu");
  //   categoryTitle.textContent = document.querySelector(`#${listID}`).textContent;
  createMainPage();
});


localStorage.setItem("지역명", 'seoul');
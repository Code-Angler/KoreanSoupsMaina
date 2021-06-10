var mapContainer = document.querySelector(".review-map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
  };
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

function callLatLng() {
  return $.ajax({
    method: "GET",
    url: `https://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000`,
    data: "query=카카오프렌즈",
    headers: {
      Authorization: "KakaoAK 0cfd3bd6b7c548be449e9c747e2c39ba",
    },
  }).done(function (msg) {
    console.log(msg);
  });
}
window.onload = callLatLng();

// function getLatLngbyKeyword(keyword) {
//   //키워드를 통해 위치 정보 불러오는 api
//   const result = await $.ajax({
//     method: "GET",
//     url: "https://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000",
//     data: { query: keyword },
//     headers: {
//       Authorization: "KakaoAK 0cfd3bd6b7c548be449e9c747e2c39ba",
//     },
//   });
//   const firstResult = result["documents"][0];
//
//   console.log("키워드입력시 위치정보", result);
//   const { x, y } = firstResult;
//   const coords = { x, y };
//
//   createMap(coords.x, coords.y);
// }

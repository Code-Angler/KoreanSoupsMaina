window.onload = function (){
    document.querySelector(".section-seoul").style.display = "block";
    document.querySelector(".section-busan").style.display = "none";
    document.querySelector(".section-daegu").style.display = "none";
    document.querySelector(".section-incheon").style.display = "none";
    document.querySelector(".section-gwangju").style.display = "none";
    document.querySelector(".section-daejeon").style.display = "none";
    document.querySelector(".section-ulsan").style.display = "none";
    document.querySelector(".section-sejong").style.display = "none";
    document.querySelector(".section-gyeonggi").style.display = "none";
    document.querySelector(".section-gangwon").style.display = "none";
    document.querySelector(".section-chungbuk").style.display = "none";
    document.querySelector(".section-chungnam").style.display = "none";
    document.querySelector(".section-jeonbuk").style.display = "none";
    document.querySelector(".section-jeonnam").style.display = "none";
    document.querySelector(".section-gyeongbuk").style.display = "none";
    document.querySelector(".section-gyeongnam").style.display = "none";
    document.querySelector(".section-jeju").style.display = "none";
}


function getSelectVale() {
    var selectedValue = document.getElementById("sorted").value;
    console.log(selectedValue)
    // const seoul = document.querySelector(".section-seoul")
    // console.log(seoul)
    if (selectedValue === '서울') {
        document.querySelector(".section-seoul").style.display = "block";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '부산') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "block";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '대구') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "block";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '인천') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "block";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '광주') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "block";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '대전') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "block";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '울산') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "block";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '세종') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "block";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '경기') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "block";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '강원') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "block";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '충북') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "block";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '충남') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "block";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '전북') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "block";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '전남') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "block";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '경북') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "block";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "none";
    }else if (selectedValue === '경남') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "block";
        document.querySelector(".section-jeju").style.display = "none";
    } else if (selectedValue === '제주') {
        document.querySelector(".section-seoul").style.display = "none";
        document.querySelector(".section-busan").style.display = "none";
        document.querySelector(".section-daegu").style.display = "none";
        document.querySelector(".section-incheon").style.display = "none";
        document.querySelector(".section-gwangju").style.display = "none";
        document.querySelector(".section-daejeon").style.display = "none";
        document.querySelector(".section-ulsan").style.display = "none";
        document.querySelector(".section-sejong").style.display = "none";
        document.querySelector(".section-gyeonggi").style.display = "none";
        document.querySelector(".section-gangwon").style.display = "none";
        document.querySelector(".section-chungbuk").style.display = "none";
        document.querySelector(".section-chungnam").style.display = "none";
        document.querySelector(".section-jeonbuk").style.display = "none";
        document.querySelector(".section-jeonnam").style.display = "none";
        document.querySelector(".section-gyeongbuk").style.display = "none";
        document.querySelector(".section-gyeongnam").style.display = "none";
        document.querySelector(".section-jeju").style.display = "block";
    }

























//         for (let i = 0; i < '{{ busans }}'.length; i++) {
            // let busan = '{{ busans }}'
            // console.log(busan)
            // let img_url = busan['img_url']
            // let title = busan['title']
            // let address =busan['address']
            //
            // let temp_html = `<div className="list">
            //                     <div className="soup-img-box"><img src="${img_url}" className="soup-img"></div>
            //                     <div className="soup-desc-box">
            //                         <div className="soup-title">
            //                             <div className="title-stick"></div>
            //                             ${title}
            //                         </div>
            //                         <div className="soup-title-desc" id="address">${address}</div>
            //                         <div className="view-more" onClick="changeToReview()"><span
            //                             className="view-more-box">View more</span>
            //                         </div>
            //                     </div>
            //                 </div>`
            // $(`#result${i}`).append(temp_html);
    //     }
    // }
}
// console.log(address)





// 서울특별시 국밥
// 부산광역시 국밥
// 대구광역시 국밥
// 인천광역시 국밥
// 광주광역시 국밥
// 대전광역시 국밥
// 울산광역시 국밥
// 세종특별자치시 국밥
// 경기도 국밥
// 강원도 국밥
// 충청북도 국밥
// 충청남도 국밥
// 전라북도 국밥
// 전라남도 국밥
// 경상북도 국밥
// 경상남도 국밥
// 제주특별자치도 국밥
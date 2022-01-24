//  이미지 show
let picture = ["images/bg11.jpg", "images/bg22.jpg", "images/bg55.jpg"]
let msg_idx = 0;            // 배열의 위치값을 맨 처음 값으로 설정

showPicture();               // 호출

function showPicture(){
    let pic = document.getElementById("cup");
    pic.src = picture[msg_idx];
    msg_idx++;              // msg_idx += 1;

    // 다시 0번 인덱스로 설정 - 3번 인덱스 넘어가면 undefined 출력
    console.log(picture.length);
    if(msg_idx === picture.length){          // 배열의 크기와 같을 경우 초기화
        msg_idx = 0;
    }
    setTimeout(showPicture, 2000);           // 콜백함수(함수의 매개변수로 함수를 설정)
}

// 디지털 시계
setInterval(function(){                     // 실행함수
    const now = new Date();
    let watch = now.toLocaleTimeString();   // 시간 표시
    document.querySelector("#display").innerHTML = watch;
}, 1000);
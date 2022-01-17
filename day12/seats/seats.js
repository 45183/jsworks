// 자리 배치도
let customer = prompt("입장객 수는 몇 명인가요?");
let col = prompt("한 줄에 몇 명이 앉나요?");        // 열의 수
let row;            // 전체 인원이 열의 수로 나누어떨어지지않는 경우

if(customer % col == 0){
    row = parseInt(customer / col)          //parseInt() : 정수   -  4.0 -> 4로 변환
}
else{
    row = parseInt(customer / col) + 1      // 나머지 있을 경우 1줄 추가
}
// document.write(row + "줄이 필요합니다.")

document.write("<table>")
for(let i =0; i < row; i++){
    document.write("<tr>")
    for(let j = 1; j <=col; j++){
        let num = i * col + j;
        document.write("<td>좌석" + num + "</td>");
        if(num == customer){        // true 일때
            break;                  // 빠져 나옴
        }
        // if(num > customer){
        //     break;
        // }
        // document.write("좌석" + num + " ");              if문의 위치에 따라 바뀜

    }
    document.write("</tr>")
}
document.write("</table>")
/* 
if(num == customer)
    break;
if문에 break 하나만 있을경우 {} 생략 가능
*/
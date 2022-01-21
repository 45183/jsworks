// 자리 배치도
let customer = prompt("입장객 수는 몇 명인가요?");
let col = prompt("한 줄에 몇 명이 앉나요?");     
let row;            

if(customer % col == 0){
    row = parseInt(customer / col)     
}
else{
    row = parseInt(customer / col) + 1    
}

document.write("<table>")
for(let i =0; i < row; i++){
    document.write("<tr>")
    for(let j = 1; j <=col; j++){
        let num = i * col + j;
        document.write("<td>좌석" + num + "</td>");
        if(num == customer){     
            break;                  
        }
    }
    document.write("</tr>")
}
document.write("</table>")
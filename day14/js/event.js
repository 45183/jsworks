// 상세 설명 보기
function showText(){
    let text = document.getElementById('detail');       
    text.style.display = "block";                      

    let btn = document.getElementById('show');         
    btn.style.display = "none";                       
}

function hideText(){
    let text = document.getElementById('detail');       
    text.style.display = "none";                       

    let btn = document.getElementById('show');
    btn.style.display = "block";                      
}
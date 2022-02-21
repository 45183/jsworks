// 폼 유효성 검사
function checkMember(){
    let form = document.regForm;            // 폼에 접근
    let id = form.mid.value;
    let pwd = form.passwd.value;
    let name = form.name.value;

    // 비밀번호용 정규 표현식
    let pwd_pat1 = /[0-9A-Za-z]/;
    // let pwd_pat1 = /[0-9A-Za-z]{8}/; - 영어 대소문자, 숫자 8자
    let pwd_pat2 = /[~!@#$%^&*]/;

    if(id.length != 5){
        alert("아이디는 5자만 가능합니다.");
        form.mid.select();                  // 선택 범위
        return false;
    }
    else if(!pwd_pat1.test(pwd) || !pwd_pat2.test(pwd) || pwd.length != 8){
        alert("비밀번호는 영문, 숫자 포함 8자만 가능합니다.");
        form.passwd.select();
        return false;
    }
    else if(name.length == ""){
        alert("이름은 필수 항목입니다.")
        form.name.focus();                  // 커서 위치 이동
        return false;
    }
    else{
        form.submit();                      // 폼을 전송함
    }
}
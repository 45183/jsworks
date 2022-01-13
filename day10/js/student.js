        // 학생의 학년, 반, 이름 정보를 출력
        var naming;       // naming이라는 변수 선언     name : html의 script에서는 사용 가능하지만 js파일에서는 예약어로 사용 불가
        naming = "추신수" 

        var grade = 2;  // 선언과 동시에 초기화
        // var class       예약어는 변수로 사용할 수 없다.
        var schoolClass = 3;    // 카멜표기 : 두 단어 쓸때 두번째 첫글자는 대문자 사용

        /* document.write(naming + '<br>');
        document.write(grade + '<br>');
        document.write(schoolClass); */
        
        document.write('<p><span>' + naming + "</span> 학생은 " + grade + "학년 " + schoolClass + "반입니다.</p>");
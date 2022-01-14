// 놀이공원 입장료 계산
var age = 26;           // 나이
var charge = 0;         // 입장료 초기화

if(age < 8){
    document.write("취학전 아동입니다.<br>")
    charge = 1000;      // 입장료는 1000을 저장
    // document.write("입장료는 " + charge + "원입니다.")
}
else if(age >= 8 && age <14){
    document.write("초등학생입니다.<br>")
    charge = 2000;      // 입장료는 2000을 저장
    // document.write("입장료는 " + charge + "원입니다.")
}
else if(age >=14 && age < 20){
    document.write("중,고등학생입니다.<br>")
    charge = 2500;       // 입장료는 2500을 저장
}
else{
    document.write("일반인입니다.<br>")
    charge = 3000;      // 입장료는 3000을 저장
}

document.write("입장료는 <span>" + charge + "원</span>입니다.")      // 공통사항
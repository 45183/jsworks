function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
}

let web = new Book("웹 표준의 정석", "고경희", 30000);
let python = new Book("점프 투 파이썬", "박응용", 20000);
let robot = new Book("천개의 파랑", "천선란", 14000);

let bookList = [web, python, robot];       

document.write("<h2>책 제목으로 살펴보기</h2>")

for(let i in bookList)
    document.write("<p>" + bookList[i].title);             
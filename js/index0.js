// Tiêu đề 
const currentTitle = document.title;

window.addEventListener("blur",  () => {
    document.title = "Love you babe";
});
window.addEventListener("focus",  () => {
    document.title = currentTitle;
});

// Lấy phần tử chứa ngày bắt đầu yêu và số ngày yêu
const startDateElement = document.getElementById("start-date");
const loveDaysElement = document.getElementById("love-days");

// Tính số ngày yêu
const startDate = new Date("2022-04-06");
const today = new Date();
const timeDiff = Math.abs(today.getTime() - startDate.getTime());
const loveDays = Math.ceil((timeDiff / (1000 * 3600 * 24))-60);

// Hiển thị kết quả trên trang web
startDateElement.textContent = startDate.toLocaleDateString();
loveDaysElement.textContent = loveDays + " days";


const button = document.getElementById("myButton");
const image = document.getElementById("myImage");

button.addEventListener("click", function() {
  image.style.display = "block";
});


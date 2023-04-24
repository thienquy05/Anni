// Tiêu đề 
const currentTitle = document.title;

window.addEventListener("blur",  () => {
    document.title = "Love you babe";
});
window.addEventListener("focus",  () => {
    document.title = currentTitle;
});

const openBtn = document.getElementById("open-btn");
const popOut = document.getElementById("pop-out");
const closeBtn = document.getElementById("close-btn");

// Mở pop-out khi click nút hoặc liên kết
openBtn.addEventListener("click", function() {
  popOut.style.display = "block";
});

// Đóng pop-out khi click nút đóng
closeBtn.addEventListener("click", function() {
  popOut.style.display = "none";
});

function checkPassword(event) {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của nút Submit của form
    var password = document.getElementById("password").value;
    if (password === "04022022") {
        window.location.assign("/index0.html");
        return true;
    } else {
        alert("Ơ ồ, sai òi. Thử lại đi heo mặp");
        return false;
    }
}

var form = document.getElementById("form"); // Thay your-form-id bằng id của form của bạn
form.addEventListener("submit", checkPassword); // Gọi hàm checkPassword khi nhấn nút Submit của form





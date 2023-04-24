// Tiêu đề 
const currentTitle = document.title;

window.addEventListener("blur",  () => {
    document.title = "Love you babe";
});
window.addEventListener("focus",  () => {
    document.title = currentTitle;
});


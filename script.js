const book = document.getElementById('book');
const leftPage = document.querySelector('.left-page');
const rightPage = document.querySelector('.right-page');
const leftText = document.getElementById('leftText');
const rightText = document.getElementById('rightText');

let isOpen = false;

book.addEventListener('click', () => {
  if (isOpen) {
    leftPage.style.transform = 'rotateY(0deg)';
    rightPage.style.transform = 'rotateY(0deg)';
    leftText.style.opacity = 1; // Mengembalikan teks ke tampilan awal
    rightText.style.opacity = 1; // Mengembalikan teks ke tampilan awal
  } else {
    leftPage.style.transform = 'rotateY(-90deg)';
    rightPage.style.transform = 'rotateY(90deg)';
    leftText.style.opacity = 0; // Menghilangkan teks
    rightText.style.opacity = 0; // Menghilangkan teks
  }
  
  isOpen = !isOpen;
});

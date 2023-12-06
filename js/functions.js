// get a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// JavaScript to check if there's an image and add or remove the class accordingly
const article = document.querySelector('.article');
const hasImage = article.querySelector('img') !== null;

if (hasImage) {
  article.classList.add('has-image');
} else {
  article.classList.remove('has-image');
}
const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

// My version of double click functionality
loveMe.addEventListener('click', (e) => {
  if (e.timeStamp - clickTime < 800) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = e.timeStamp;
  }
});

// loveMe.addEventListener('dblclick', (e) => createHeart(e));

// loveMe.addEventListener('click', (e) => {
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//   } else {
//     if (new Date().getDate() - clickTime < 800) {
//       createHeart(e);
//       clickTime = 0;
//     } else {
//       clickTime = new Date().getTime();
//     }
//   }
// });

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);

  times.innerHTML = ++timesClicked;
};

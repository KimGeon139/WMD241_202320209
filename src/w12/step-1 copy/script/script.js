console.log('안녕하세요');
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = 'oklch(0.5, 0.05, 0)';

let aCard = document.querySelector('.card');
// 첫번째 클래스 선택
console.log(aCard);
aCard.addEventListener('click', function () {
  console.log('클릭!');
  // aCard.style.backgroundColor = '#ff0000';
  aCard.classList.toggle('card--state-clicked');
  console.log(aCard.classList);
});
// document.querySelectoraAll('.card');
// 클래스를 가진 모든것

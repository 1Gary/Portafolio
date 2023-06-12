
const popup1 = document.querySelector('.popup1');
const closeButton1 = document.querySelector('.close1');
const popup2 = document.querySelector('.popup2');
const closeButton2 = document.querySelector('.close2');
const popup3 = document.querySelector('.popup3');
const closeButton3 = document.querySelector('.close3');
const popup4 = document.querySelector('.popup4');
const closeButton4 = document.querySelector('.close4');
const popup5 = document.querySelector('.popup5');
const closeButton5 = document.querySelector('.close5');
const popup6 = document.querySelector('.popup6');
const closeButton6 = document.querySelector('.close6');
const popup7 = document.querySelector('.popup7');
const closeButton7 = document.querySelector('.close7');


function openPopup1() {
  popup1.style.display = 'block';
}

function closePopup1() {
  popup1.style.display = 'none';
}

function openPopup2() {
  popup2.style.display = 'block';
}

function closePopup2() {
  popup2.style.display = 'none';
}

function openPopup3() {
  popup3.style.display = 'block';
}

function closePopup3() {
  popup3.style.display = 'none';
}

function openPopup4() {
  popup4.style.display = 'block';
}

function closePopup4() {
  popup4.style.display = 'none';
}
function openPopup5() {
  popup5.style.display = 'block';
}

function closePopup5() {
  popup5.style.display = 'none';
}
function openPopup6() {
  popup6.style.display = 'block';
}

function closePopup6() {
  popup6.style.display = 'none';
}
function openPopup7() {
  popup7.style.display = 'block';
}

function closePopup7() {
  popup7.style.display = 'none';
}

closeButton1.addEventListener('click', closePopup1);
closeButton2.addEventListener('click', closePopup2);
closeButton3.addEventListener('click', closePopup3);
closeButton4.addEventListener('click', closePopup4);
closeButton5.addEventListener('click', closePopup5);
closeButton6.addEventListener('click', closePopup6);
closeButton7.addEventListener('click', closePopup7);

window.addEventListener('click', function(event) {
 
  if (event.target == popup1) {
    closePopup1();
  }
  if (event.target == popup2) {
    closePopup2();
  }
  if (event.target == popup3) {
    closePopup3();
  }
  if (event.target == popup4) {
    closePopup4();
  }
  if (event.target == popup5) {
    closePopup5();
  }
  if (event.target == popup6) {
    closePopup6();
  }
  if (event.target == popup7) {
    closePopup7();
  }
});





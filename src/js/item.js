// 서브메뉴 검색 언더라인
const searchInput = document.querySelector('#search_input');
const searchBtn = document.querySelector('#search_btn');

searchBtn.addEventListener('click', function () {
  searchInput.classList.toggle('active');
  searchInput.focus();
});

// 사이드메뉴
const sideMenuBtn = document.querySelector('#sidemenu_btn');
const sideMenu = document.querySelector('#side_menu');
const sideMenuShow = document.getElementById('sidemenu_show');

sideMenuBtn.addEventListener('click', function () {
  sideMenu.classList.add('show');
  sideMenuShow.classList.add('back');
});

sideMenuShow.addEventListener('click', function () {
  sideMenu.classList.remove('show');
  sideMenuShow.classList.remove('back');
});

// 스크롤 상단 메뉴 크기 조정
const menu = document.querySelector('.header-fix');
const menuHeight = menu.getBoundingClientRect().height;
const headerWrap = document.querySelector('.header-wrap');
const mainLogo = document.querySelector('.main-logo');
const mainMenu = document.querySelector('.main-menu');

document.addEventListener('scroll', () => {
  if (window.scrollY > menuHeight) {
    headerWrap.classList.add('scrolldown');
    mainLogo.classList.add('logoscrolldown');
    mainMenu.classList.add('menuscrolldown');
  } else {
    headerWrap.classList.remove('scrolldown');
    mainLogo.classList.remove('logoscrolldown');
    mainMenu.classList.remove('menuscrolldown');
  }
});

// 상단 스크롤 버튼
const btnTop = document.querySelector('.btn_top');

document.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    showBtn();
  } else {
    hideBtn();
  }
});

function showBtn() {
  btnTop.classList.add('showbtntop');
}

function hideBtn() {
  btnTop.classList.remove('showbtntop');
}

btnTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
});

function change(e) {
  let bigImg = document.querySelector('.big_img > img');
  let clickImg = e.target;
  bigImg.src = clickImg.src;
}

let frm = document.frm;
let selectbox = document.getElementById('selectbox');
let parent = document.getElementById('parent');
let price = document.getElementById('itemprice');
let itemName = document.getElementById('itemname').innerHTML; // 상품 이름

function addList() {
  let selectOption = frm.selectbox.options[selectbox.selectedIndex];

  if (frm.selectbox.selectedIndex === 0) {
    return;
  }

  let size = selectOption.text;
  let fullText = `[SHIRTER] SHIRRING PULLOVER HALF SHIRT (BLACK) - ${size}`; // 상품 이름과 사이즈를 포함한 전체 텍스트
  let overlap = null;

  // 동일한 상품 이름과 사이즈가 있는지 확인
  document.querySelectorAll('#td1').forEach((td) => {
    if (td.textContent.includes(fullText)) {
      overlap = td.parentElement;
    }
  });

  if (overlap) {
    // 이미 있는 사이즈면 amountUp 버튼 클릭
    let amountUp = overlap.querySelector(
      "#amount-btn img[src*='btn_count_up.gif']"
    );
    if (amountUp) {
      amountUp.click(); // amountUp 버튼 클릭
    }
  } else {
    // 새로운 사이즈면 tr 생성
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.id = 'td1';
    td1.innerHTML = `<strong>${itemName}</strong> - ${size}`;

    let td2 = document.createElement('td');

    let divAmount = document.createElement('div');
    divAmount.id = 'amount';

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', '1');

    let amountBtn = document.createElement('div');
    amountBtn.id = 'amount-btn';

    let amountUp = document.createElement('img');
    amountUp.setAttribute(
      'src',
      'https://img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif'
    );

    let br = document.createElement('br');

    let amountDown = document.createElement('img');
    amountDown.setAttribute(
      'src',
      'https://img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif'
    );

    amountBtn.append(amountUp, br, amountDown);

    let deleteBtn = document.createElement('img');
    deleteBtn.id = 'delete-btn';
    deleteBtn.setAttribute(
      'src',
      'https://img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif'
    );

    divAmount.append(input, amountBtn, deleteBtn);

    td2.append(divAmount);

    let td3 = document.createElement('td');
    td3.id = 'td3';
    td3.innerHTML = price.innerHTML + '원';

    tr.append(td1, td2, td3);

    let insertObj = document.getElementById('insert_obj');
    insertObj.parentNode.insertBefore(tr, insertObj);

    amountUp.addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
      td3.innerHTML = price.innerHTML * input.value + '원';
      totalPrice();
    });

    amountDown.addEventListener('click', () => {
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        td3.innerHTML = price.innerHTML * input.value + '원';
        totalPrice();
      }
    });

    let remove = () => {
      tr.remove();
      totalPrice();
    };
    deleteBtn.addEventListener('click', remove);
  }

  function totalPrice() {
    let sum = document.getElementById('sum');
    let total = 0;
    let priceInts = document.querySelectorAll('#td3');
    priceInts.forEach((priceInt) => {
      total += parseInt(priceInt.textContent);
    });
    sum.textContent = total;
  }

  totalPrice();
}

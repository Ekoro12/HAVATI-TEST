import { itemsList } from './module.js';

window.onload = showItem;

const delBtn = document.querySelector('#dropItem');
const orderBtn = document.querySelector('#order');
const cartPrice = document.querySelector('.cart_price');
const tbody = document.querySelector('tbody');

delBtn.addEventListener('click', deleteItem);
orderBtn.addEventListener('click', () => alert('준비중 입니다.'));

// 메서드 정의

function deleteItem() {
  let frm = document.querySelector('#frm');
  let checkboxList = frm.querySelectorAll('input[name="del"]');
  let isChecked = false;
  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    alert('삭제될 아이템이 없습니다.');
    return;
  }

  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
      checkboxList[i].closest('tr').remove();
    }
  }
  cartPrice.innerHTML = `총 상품 구매금액 + 배송비 0(무료) = 합계:<span id="total_price">${totalPrice()}</span>원`;
}

function showItem() {
  const noCartItem = document.querySelector('.no_cart_item');
  tbody.innerHTML = ''; // 초기화

  const storedItems = getItemLocalStorage();
  if (storedItems) {
    itemsList.length = 0;
    storedItems.forEach((item) => itemsList.push(item));
  }

  if (itemsList.length == 0) {
    noCartItem.style.display = 'flex';
    noCartItem.innerText = '아이템이 없습니다.';
    console.log('아이템이 없습니다.');
    return;
  }

  for (let i = 0; i < itemsList.length; i++) {
    tbody.innerHTML += `
                <tr>
                    <td><input id="selectDel" type="checkbox" name="del"></td>
                    <td><img src="${itemsList[i].imgUrl}"></td>
                    <td>${itemsList[i].name} - ${itemsList[i].size}</td>
                    <td><button class="pullItem" data-index="${i}">-</button><span class="itemCount">${itemsList[i].count}</span><button class="pushItem" data-index="${i}">+</button></td>
                    <td>${itemsList[i].price}</td>
                </tr>
            `;
  }

  const pullItemBtns = document.querySelectorAll('.pullItem');
  const pushItemBtns = document.querySelectorAll('.pushItem');

  pullItemBtns.forEach((btn) => btn.addEventListener('click', pullItem));
  pushItemBtns.forEach((btn) => btn.addEventListener('click', pushItem));

  cartPrice.innerHTML = `총 상품 구매금액 + 배송비 0(무료) = 합계:<span id="total_price">${totalPrice()}</span>원`;
}

function pullItem(event) {
  const index = event.target.dataset.index;
  if (itemsList[index].count > 0) {
    itemsList[index].count -= 1;
    setItemLocalStorage();
    showItem();
  }
}

function pushItem(event) {
  const index = event.target.dataset.index;
  itemsList[index].count += 1;
  setItemLocalStorage();
  showItem();
}

function totalPrice() {
  let sum = 0;
  const rows = tbody.querySelectorAll('tr');
  rows.forEach((row) => {
    const cols = row.querySelectorAll('td');
    const count = parseInt(cols[3].querySelector('.itemCount').textContent);
    const price = parseInt(cols[4].textContent);
    const total = count * price;
    sum += total;
  });
  return sum;
}

function getItemLocalStorage() {
  let cartString = localStorage.getItem('cart');
  if (!cartString) {
    console.log('카트 비었음');
    return null;
  } else {
    console.log(cartString);
    let cartList = JSON.parse(cartString);
    return cartList;
  }
}

function setItemLocalStorage() {
  let itemsListString = JSON.stringify(itemsList);
  localStorage.setItem('cart', itemsListString);
}

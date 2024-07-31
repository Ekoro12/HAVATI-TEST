// 서브메뉴 검색 언더라인

const searchInput = document.querySelector("#search_input");
const searchBtn = document.querySelector("#search_btn");


searchBtn.addEventListener("click", function(){
    searchInput.classList.toggle("active");
    searchInput.focus();
})

// 사이드메뉴 

const sideMenuBtn = document.querySelector("#sidemenu_btn");
const sideMenu = document.querySelector("#side_menu")
const sideMenuShow = document.getElementById("sidemenu_show")

sideMenuBtn.addEventListener("click", function(){
    sideMenu.classList.add('show');
    sideMenuShow.classList.add('back');
})

sideMenuShow.addEventListener('click', function(){
    sideMenu.classList.remove('show');
    sideMenuShow.classList.remove('back');
})


// 스크롤 상단 메뉴 크기 조정
const menu = document.querySelector('.header-fix');
const menuHeight = menu.getBoundingClientRect().height;
const headerWrap = document.querySelector('.header-wrap');
const mainLogo = document.querySelector(".main-logo");
const mainMenu = document.querySelector(".main-menu");

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
const btnTop = document.querySelector(".btn_top");


document.addEventListener('scroll', () => {
	if (window.scrollY > 20){
		showBtn();
	} else{
		hideBtn();
	}
});

function showBtn() {
  btnTop.classList.add("showbtntop");
}

function hideBtn() {
  btnTop.classList.remove("showbtntop");
}

btnTop.click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});
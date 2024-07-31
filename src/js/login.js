function login() {
  let frm = document.frm;
  let member_id = frm.member_id;
  let member_passwd = frm.member_passwd;

  if (member_id.value == '') {
    alert('아이디를 입력하세요');
    member_id.focus();
    return;
  } else if (member_passwd.value == '') {
    alert('비밀번호를 입력하세요');
    member_passwd.focus();
    return;
  } else {
    alert('로그인 되었습니다!');
  }
}

function pressEnter(event) {
  if (event.key === 'Enter') {
    login();
  }
}

const loginBtn = document.querySelector('.login_btn');
const userId = document.querySelector('#user_id');
const userPw = document.querySelector('#user_pw');

loginBtn.addEventListener('click', login);
userId.addEventListener('keyup', pressEnter);
userPw.addEventListener('keyup', pressEnter);
